package com.societe.employee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.societe.employee.models.Department;



public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
