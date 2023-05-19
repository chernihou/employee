package com.societe.employee.services;

import java.util.List;

import com.societe.employee.models.Employee;


public interface EmployeeService {
	public List<Employee> getAllEmployees();
	public Employee update(Employee e);
	public void delete(Long id);
	public Employee addEmployee(Employee e);
	public Employee findById(Long id);

}
