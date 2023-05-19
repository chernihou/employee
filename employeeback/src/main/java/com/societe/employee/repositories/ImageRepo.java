package com.societe.employee.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.societe.employee.models.ImageModel;

public interface ImageRepo extends JpaRepository<ImageModel, Long> {

    Optional<ImageModel> findByName(String name);

}
