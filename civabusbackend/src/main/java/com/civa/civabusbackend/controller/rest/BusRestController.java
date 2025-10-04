package com.civa.civabusbackend.controller.rest;

import com.civa.civabusbackend.dto.BusDTO;
import com.civa.civabusbackend.service.BusService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bus")
public class BusRestController {

    private final BusService busService;

    public BusRestController(BusService busService) {
        this.busService = busService;
    }

    @GetMapping
    public Page<BusDTO> getAll(Pageable pageable) {
        return busService.listarTodos(pageable);
    }

    @GetMapping("/{id}")
    public BusDTO getById(@PathVariable Long id) {
        return busService.obtenerPorId(id);
    }
}
