import { Request, Response } from "express";
import prisma from "../config/db";
import { ReporteBody } from "../types/reporte";

export const crearReporte = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const body: ReporteBody = req.body;

    if (
      body.titulo === undefined ||
      body.descripcion === undefined
    ) {

      res.status(400).json({
        mensaje: "Título y descripción requeridos"
      });

      return;
    }

    const reporte = await prisma.reporte.create({
      data: {
        titulo: body.titulo,
        descripcion: body.descripcion,
        categoria: body.categoria,
        imagen: body.imagen,
        latitud: body.latitud,
        longitud: body.longitud
      }
    });

    res.status(201).json(reporte);

  } catch (error) {

    res.status(500).json({
      mensaje: "Error al crear reporte"
    });

  }
};

export const obtenerReportes = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {

    const reportes = await prisma.reporte.findMany({
      orderBy: {
        fecha: "desc"
      }
    });

    res.json(reportes);

  } catch (error) {

    res.status(500).json({
      mensaje: "Error al obtener reportes"
    });

  }
};