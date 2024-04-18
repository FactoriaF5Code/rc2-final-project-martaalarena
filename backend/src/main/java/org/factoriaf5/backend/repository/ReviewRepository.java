package org.factoriaf5.backend.repository;

import org.factoriaf5.backend.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
