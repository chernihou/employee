package com.societe.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.societe.employee.models.Client;
import com.societe.employee.models.Employee;
import com.societe.employee.services.ClientService;
import com.societe.employee.services.EmployeeService;

@CrossOrigin("*") 
@RestController
@RequestMapping("api/Clients") 
public class ClientController {

	@Autowired
	private ClientService cService;
	
	
	@GetMapping
	public List<Client> getAllClients(){
		return cService.getAllClients();
	}

	@GetMapping("/{ClientId}")
	public Client getClientsById(@PathVariable Long ClientId) { 
		return cService.findById(ClientId);		 
	}
	
	@PostMapping
	public Client add(@Validated @RequestBody Client c) throws ResourceNotFoundException {
		return cService.addClient(c);
		
	    

	}
	
	@PutMapping("/{ClientId}")
	public Client update(@PathVariable Long ClientId ,@RequestBody Client s) { 
		return cService.update(s);
	
	}	
	
		
	
	@DeleteMapping("/{ClientId}")
	public void delete(@PathVariable Long ClientId) { 
		cService.delete(ClientId);
	}
}
