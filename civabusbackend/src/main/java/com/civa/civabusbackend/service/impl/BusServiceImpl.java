package com.civa.civabusbackend.service.impl;

import com.civa.civabusbackend.dto.BusDTO;
import com.civa.civabusbackend.exception.RecursoNoEncontradoException;
import com.civa.civabusbackend.mapper.BusMapper;
import com.civa.civabusbackend.repository.BusRepository;
import com.civa.civabusbackend.service.BusService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BusServiceImpl implements BusService {

    private final BusRepository busRepository;

    public BusServiceImpl(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @Override
    public Page<BusDTO> listarTodos(Pageable pageable) {
        return busRepository.findAll(pageable)
                .map(BusMapper::toDTO);
    }

    @Override
    public BusDTO obtenerPorId(Long id) {
        return busRepository.findById(id)
                .map(BusMapper::toDTO)
                .orElseThrow(() -> new RecursoNoEncontradoException("Bus no encontrado con id: " + id));
    }
}