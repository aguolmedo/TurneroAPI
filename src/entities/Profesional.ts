import { Column, Entity, OneToMany } from "typeorm";
import { Turno } from "./Turno";

@Entity("profesional", { schema: "turnos" })
export class Profesional {
  @Column("varchar", {primary: true, name: "nroTelefono", length: 45 })
  nroTelefono: string;

  @Column("varchar", { name: "nombre", length: 45 })
  nombre: string;

  @Column("varchar", { name: "apellido", length: 45 })
  apellido: string;

  @OneToMany(() => Turno, (turno) => turno.profesional2)
  turnos: Turno[];
}
