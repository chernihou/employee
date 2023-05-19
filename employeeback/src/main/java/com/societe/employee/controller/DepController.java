package com.societe.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.societe.employee.models.Department;

import com.societe.employee.services.DepartmentService;



@CrossOrigin("*") 
@RestController
@RequestMapping("api/Departements") 
public class DepController {
	@Autowired
	private DepartmentService dService;


	@GetMapping("")
	public List<Department> getAllDepartments(){
	return dService.getAllDepartments();
	}
	@PutMapping("/{id}")
	public Department update(@PathVariable Long id ,@RequestBody Department d) { 
		return dService.update(d);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) { 
		dService.delete(id);
	}
	@PostMapping
	public Department add(@RequestBody Department d) {
		return dService.addDepartment(d);
	} 
	@GetMapping("/{id}")
	public Department getDepartmentsById(@PathVariable Long id) { 
		return dService.findById(id);
	}
	

	   

}
