-- CreateEnum
CREATE TYPE "Estado_Reclamo" AS ENUM ('ABIERTO', 'CERRADO');

-- CreateEnum
CREATE TYPE "Tipo_Doc" AS ENUM ('DNI', 'CE', 'PASSPORT');

-- CreateEnum
CREATE TYPE "Tipo_Reclamo" AS ENUM ('QUEJA', 'RECLAMO');

-- CreateEnum
CREATE TYPE "Tipo_Comprobante" AS ENUM ('FACTURA', 'BOLETA');

-- CreateTable
CREATE TABLE "empresas" (
    "id" SERIAL NOT NULL,
    "ruc" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "domicilio_fiscal" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "last_session" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reclamos" (
    "id" SERIAL NOT NULL,
    "nro_seguimiento" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "fecha_reclamo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mayor_edad" BOOLEAN NOT NULL DEFAULT false,
    "tipo_documento" "Tipo_Doc" NOT NULL DEFAULT 'DNI',
    "nro_dni" TEXT NOT NULL,
    "nombre_apoderado" TEXT,
    "direccion" TEXT,
    "referencia" TEXT,
    "departamento" TEXT,
    "provincia" TEXT,
    "distrito" TEXT,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "tipo_reclamo" "Tipo_Reclamo" NOT NULL DEFAULT 'QUEJA',
    "motivo_reclamo" TEXT NOT NULL,
    "pedido_reclamo" TEXT NOT NULL,
    "estado_reclamo" "Estado_Reclamo" NOT NULL DEFAULT 'ABIERTO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "reclamos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_reclamos" (
    "id" SERIAL NOT NULL,
    "fecha_compra" TIMESTAMP(3) NOT NULL,
    "tipo_comprobante" "Tipo_Comprobante" NOT NULL DEFAULT 'BOLETA',
    "nro_comprobante" TEXT NOT NULL,
    "monto_producto" DOUBLE PRECISION NOT NULL,
    "codigo_producto" TEXT NOT NULL,
    "detalle_producto" TEXT NOT NULL,
    "reclamoId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "detalle_reclamos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresas_ruc_key" ON "empresas"("ruc");

-- CreateIndex
CREATE UNIQUE INDEX "empresas_telefono_key" ON "empresas"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "empresas_email_key" ON "empresas"("email");

-- CreateIndex
CREATE UNIQUE INDEX "detalle_reclamos_reclamoId_key" ON "detalle_reclamos"("reclamoId");

-- AddForeignKey
ALTER TABLE "reclamos" ADD CONSTRAINT "reclamos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_reclamos" ADD CONSTRAINT "detalle_reclamos_reclamoId_fkey" FOREIGN KEY ("reclamoId") REFERENCES "reclamos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
