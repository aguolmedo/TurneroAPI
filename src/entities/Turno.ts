import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Profesional } from "./Profesional";

@Index("cliente_idx", ["cliente"], {})
@Index("profesional_idx", ["profesional"], {})
@Entity("turno", { schema: "turnos" })
export class Turno {
  @PrimaryGeneratedColumn({ type: "int", name: "idTurno" })
  idTurno: number;

  @Column("datetime", { name: "fechaHoraInicio" })
  fechaHoraInicio: Date;

  @Column("bit", { name: "confirmado" })
  confirmado: boolean;

  @Column("datetime", { name: "fechaHoraFin" })
  fechaHoraFin: Date;

  @Column("varchar", { name: "cliente", length: 45 })
  cliente: string;

  @Column("varchar", { name: "profesional", length: 45 })
  profesional: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.turnos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "cliente", referencedColumnName: "nroTelefono" }])
  cliente2: Cliente;

  @ManyToOne(() => Profesional, (profesional) => profesional.turnos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "profesional", referencedColumnName: "dni" }])
  profesional2: Profesional;
}
