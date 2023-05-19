package com.societe.employee.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.societe.employee.models.Employee;

import com.societe.employee.repositories.EmployeeRepository;

import com.societe.employee.services.EmployeeService;

@Service
public class EmployeeServicesImpl implements EmployeeService {

	@Autowired
	public EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> getAllEmployees() {
		
		return employeeRepository.findAll();
	}

	@Override
	public Employee update(Employee e) {
		return employeeRepository.save(e);
	}

	@Override
	public void delete(Long id) {
		employeeRepository.deleteById(id);
		System.out.println("delete");
	}

	@Override
	public Employee addEmployee(Employee e) {
		return employeeRepository.save(e);
	
	   
	}

	@Override
	public Employee findById(Long id) {
		Optional<Employee> employee=employeeRepository.findById(id);
		return employee.isPresent() ? employee.get() : null;
	}
	


}
