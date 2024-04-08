package org.factoriaf5.backend.controllers;

import java.util.List;

import org.factoriaf5.backend.models.Review;
import org.factoriaf5.backend.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("api/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;


    @GetMapping
    public List<Review> findAll(){
        return reviewService.findAll();
    }

    @PostMapping
    public Review create(@RequestBody Review review) {
        return reviewService.save(review);
    }




}
