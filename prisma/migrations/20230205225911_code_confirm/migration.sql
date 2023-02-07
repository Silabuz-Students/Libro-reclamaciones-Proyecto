-- CreateTable
CREATE TABLE `empresas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ruc` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `domicilio_fiscal` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(12) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `code_confirm` VARCHAR(4) NULL,
    `last_session` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `empresas_ruc_key`(`ruc`),
    UNIQUE INDEX `empresas_telefono_key`(`telefono`),
    UNIQUE INDEX `empresas_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reclamos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nro_seguimiento` VARCHAR(191) NOT NULL,
    `nombres` VARCHAR(191) NOT NULL,
    `apellidos` VARCHAR(191) NOT NULL,
    `fecha_reclamo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mayor_edad` BOOLEAN NOT NULL DEFAULT false,
    `tipo_documento` ENUM('DNI', 'CE', 'PASSPORT') NOT NULL DEFAULT 'DNI',
    `nro_dni` VARCHAR(191) NOT NULL,
    `nombre_apoderado` VARCHAR(191) NULL,
    `direccion` VARCHAR(191) NULL,
    `referencia` VARCHAR(191) NULL,
    `departamento` VARCHAR(191) NULL,
    `provincia` VARCHAR(191) NULL,
    `distrito` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `tipo_reclamo` ENUM('QUEJA', 'RECLAMO') NOT NULL DEFAULT 'QUEJA',
    `motivo_reclamo` VARCHAR(191) NOT NULL,
    `pedido_reclamo` VARCHAR(191) NOT NULL,
    `estado_reclamo` ENUM('ABIERTO', 'CERRADO') NOT NULL DEFAULT 'ABIERTO',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `empresaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalle_reclamos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_compra` DATETIME(3) NOT NULL,
    `tipo_comprobante` ENUM('FACTURA', 'BOLETA') NOT NULL DEFAULT 'BOLETA',
    `nro_comprobante` VARCHAR(191) NOT NULL,
    `monto_producto` DOUBLE NOT NULL,
    `codigo_producto` VARCHAR(191) NOT NULL,
    `detalle_producto` VARCHAR(191) NOT NULL,
    `reclamoId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `detalle_reclamos_reclamoId_key`(`reclamoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reclamos` ADD CONSTRAINT `reclamos_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_reclamos` ADD CONSTRAINT `detalle_reclamos_reclamoId_fkey` FOREIGN KEY (`reclamoId`) REFERENCES `reclamos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
