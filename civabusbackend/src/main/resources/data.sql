INSERT INTO marca (nombre, fecha_creacion) VALUES
('Volvo', NOW()),
('Mercedes-Benz', NOW()),
('Scania', NOW()),
('MAN', NOW()),
('Iveco', NOW())
ON CONFLICT (nombre) DO NOTHING;

INSERT INTO bus (numero_bus, placa, fecha_creacion, caracteristicas, activo, marca_id) VALUES
('001', 'AAA-111', NOW(), 'Asientos reclinables, aire acondicionado', true, 1),
('002', 'BBB-222', NOW(), 'Doble piso, baño incluido', true, 1),
('003', 'CCC-333', NOW(), 'Pantallas individuales', true, 2),
('004', 'DDD-444', NOW(), 'WiFi gratuito, cargadores USB', true, 2),
('005', 'EEE-555', NOW(), 'Ecológico, motor Euro 6', true, 3),
('006', 'FFF-666', NOW(), 'Baño + aire acondicionado', true, 3),
('007', 'GGG-777', NOW(), 'Asientos semi-cama', true, 3),
('008', 'HHH-888', NOW(), 'Cinturones de seguridad en todos los asientos', true, 4),
('009', 'III-999', NOW(), 'Bus cama, ideal para viajes largos', true, 4),
('010', 'JJJ-010', NOW(), 'Cortinas individuales', true, 5),
('011', 'KKK-011', NOW(), 'Aire acondicionado + calefacción', true, 5),
('012', 'LLL-012', NOW(), 'Conectividad USB en cada asiento', true, 5),
('013', 'MMM-013', NOW(), 'Luces LED interiores', true, 1),
('014', 'NNN-014', NOW(), 'Sistema de entretenimiento central', true, 2),
('015', 'OOO-015', NOW(), 'Ventanas panorámicas', true, 3),
('016', 'PPP-016', NOW(), 'Baño químico portátil', true, 4),
('017', 'QQQ-017', NOW(), 'Reclinación 160°', true, 5),
('018', 'RRR-018', NOW(), 'Cámaras de seguridad internas', true, 1),
('019', 'SSS-019', NOW(), 'Motor de alta potencia', true, 2),
('020', 'TTT-020', NOW(), 'Espacio extra para maletas', true, 3)
ON CONFLICT (placa) DO NOTHING;
