package com.db.grad.api.service;

import com.db.grad.api.model.Book;
import com.db.grad.api.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book getBookByUsername(String username) {
        return bookRepository.findByUsername(username);
    }

    public void deleteBook(long book_id) {
        bookRepository.deleteById(book_id);
    }

}
