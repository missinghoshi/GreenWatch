export interface Reporte {
  id?: number;
  titulo: string;
  descripcion: string;
  categoria?: string;
  imagen?: string;
  latitud?: number;
  longitud?: number;
  fecha?: string;
}