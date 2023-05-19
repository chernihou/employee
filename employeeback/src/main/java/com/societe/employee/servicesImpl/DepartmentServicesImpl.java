package com.societe.employee.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.societe.employee.models.Department;
import com.societe.employee.repositories.DepartmentRepository;
import com.societe.employee.services.DepartmentService;

@Service
public class DepartmentServicesImpl implements DepartmentService {
	@Autowired
	public DepartmentRepository dRepository;
	
	@Override
	public List<Department> getAllDepartments() {
		return dRepository.findAll();
	}

	@Override
	public Department update(Department s) {
		return dRepository.save(s);
	}

	@Override
	public void delete(Long id) {
		dRepository.deleteById(id);
		
	}

	@Override
	public Department addDepartment(Department s) {
		return dRepository.save(s);
	}

	@Override
	public Department findById(Long id) {
		Optional<Department> d=dRepository.findById(id);
		return d.isPresent() ? d.get() : null;
	}

}
