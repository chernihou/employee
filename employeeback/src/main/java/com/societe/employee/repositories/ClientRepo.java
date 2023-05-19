package com.societe.employee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.societe.employee.models.Client;



public interface ClientRepo extends JpaRepository<Client, Long> {

}
