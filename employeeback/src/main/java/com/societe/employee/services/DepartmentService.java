package com.societe.employee.services;

import java.util.List;

import com.societe.employee.models.Department;



public interface DepartmentService  {
	public List<Department> getAllDepartments();
	public Department update(Department s);
	public void delete(Long id);
	public Department addDepartment(Department s);
	public Department findById(Long id);

}
