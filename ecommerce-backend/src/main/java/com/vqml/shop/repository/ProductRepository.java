package com.vqml.shop.repository;

import com.vqml.shop.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
    // Spring generates all the code for save(), findAll(), and findById() automatically!
}