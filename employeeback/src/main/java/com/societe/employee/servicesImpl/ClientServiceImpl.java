package com.societe.employee.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.societe.employee.models.Client;
import com.societe.employee.repositories.ClientRepo;
import com.societe.employee.services.ClientService;



@Service
public class ClientServiceImpl implements ClientService{
	@Autowired
	public ClientRepo CRepository;
	
	@Override
	public List<Client> getAllClients() {
		return CRepository.findAll();
	}

	@Override
	public Client update(Client e) {
		return CRepository.save(e);
	}

	@Override
	public void delete(Long id) {
		CRepository.deleteById(id);
		
	}

	@Override
	public Client addClient(Client e) {
		return CRepository.save(e);
	
	   
	}

	@Override
	public Client findById(Long id) {
		Optional<Client> C=CRepository.findById(id);
		return C.isPresent() ? C.get() : null;
	}
	

}
