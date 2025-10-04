package com.civa.civabusbackend.service;

import com.civa.civabusbackend.dto.BusDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BusService {
    Page<BusDTO> listarTodos(Pageable pageable);
    BusDTO obtenerPorId(Long id);
}