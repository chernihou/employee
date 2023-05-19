package com.societe.employee.services;

import java.util.List;

import com.societe.employee.models.Client;

public interface ClientService {
	public List<Client> getAllClients();
	public Client update(Client s);
	public void delete(Long id);
	public Client addClient(Client s);
	public Client findById(Long id);
}
