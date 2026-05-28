export interface ReporteBody {
  titulo: string;
  descripcion: string;
  categoria?: string;
  imagen?: string;
  latitud?: number;
  longitud?: number;
}