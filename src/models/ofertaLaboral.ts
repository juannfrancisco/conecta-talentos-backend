import { Empresa } from './empresa';
import { Postulacion } from './postulacion';

export class OfertaLaboral {
  constructor(
    public id: number,
    public fechaCreacion: Date,
    public descripcion: string,
    public cargo: string,
    public region: string,
    public tipo: string,
    public estado: string,
    public empresa: Empresa,
    public postulaciones: Postulacion[],
  ) {}
}
