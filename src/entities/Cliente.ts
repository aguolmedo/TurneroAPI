import { Column, Entity, Index, OneToMany } from "typeorm";
import { Turno } from "./Turno";

@Index("nroTelefono_UNIQUE", ["nroTelefono"], { unique: true })
@Entity("cliente", { schema: "turnos" })
export class Cliente {
  @Column("varchar", { primary: true, name: "nroTelefono", length: 45 })
  nroTelefono: string;

  @Column("varchar", { name: "nombre", length: 45 })
  nombre: string;

  @Column("varchar", { name: "apellido", length: 45 })
  apellido: string;

  @OneToMany(() => Turno, (turno) => turno.cliente2)
  turnos: Turno[];
}
