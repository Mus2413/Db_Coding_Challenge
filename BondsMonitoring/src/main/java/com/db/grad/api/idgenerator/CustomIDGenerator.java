package com.db.grad.api.idgenerator;

import org.hibernate.HibernateException;
import org.hibernate.MappingException;
import org.hibernate.boot.model.relational.Database;
import org.hibernate.boot.model.relational.SqlStringGenerationContext;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.exception.spi.Configurable;
import org.hibernate.id.IdentifierGenerator;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class CustomIDGenerator implements IdentifierGenerator, Configurable {

    private String tableName;

    @Override
    public void configure(Type type, Properties params, ServiceRegistry serviceRegistry) throws MappingException {
        tableName = params.getProperty("tableName");
    }

    @Override
    public void registerExportables(Database database) {
        IdentifierGenerator.super.registerExportables(database);
    }

    @Override
    public void initialize(SqlStringGenerationContext context) {
        IdentifierGenerator.super.initialize(context);
    }

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {


        Connection connection = session.connection();

        try {
            Statement statement = connection.createStatement();

            ResultSet rs = statement.executeQuery("select max(id) as Id from " + tableName);

            if (rs.next()) {
                long id = rs.getInt(1) + 1;
                return id;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public boolean supportsJdbcBatchInserts() {
        return IdentifierGenerator.super.supportsJdbcBatchInserts();
    }

    @Override
    public void configure(Properties properties) throws HibernateException {

    }
}