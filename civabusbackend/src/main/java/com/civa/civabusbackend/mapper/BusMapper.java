package com.civa.civabusbackend.mapper;

import com.civa.civabusbackend.dto.BusDTO;
import com.civa.civabusbackend.entity.Bus;

public class BusMapper {
    public static BusDTO toDTO(Bus bus) {
        return new BusDTO(
                bus.getId(),
                bus.getNumeroBus(),
                bus.getPlaca(),
                bus.getFechaCreacion(),
                bus.getCaracteristicas(),
                bus.getActivo(),
                bus.getMarca().getNombre()
        );
    }
}
