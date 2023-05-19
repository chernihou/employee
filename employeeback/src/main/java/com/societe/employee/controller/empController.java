package com.societe.employee.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.societe.employee.models.Employee;
import com.societe.employee.models.Department;
import com.societe.employee.services.EmployeeService;



@CrossOrigin("*") 
@RestController
@RequestMapping("api/") 
public class empController {
	@Autowired
	private EmployeeService employeeService;
	
	
	@GetMapping
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}

	@GetMapping("/{EmployeeId}")
	public Employee getEmployeesById(@PathVariable Long EmployeeId) { 
		return employeeService.findById(EmployeeId);		 
	}
	
	@PostMapping
	public Employee add(@Validated @RequestBody Employee employees) throws ResourceNotFoundException {
		return employeeService.addEmployee(employees);
		
	    

	}
	
	@PutMapping("/{EmployeeId}")
	public Employee update(@PathVariable Long EmployeeId ,@RequestBody Employee employees) { 
		return employeeService.update(employees);
	
	}	
	
		
	
	@DeleteMapping("/{EmployeeId}")
	public void delete(@PathVariable Long EmployeeId) { 
		employeeService.delete(EmployeeId);
	}
}