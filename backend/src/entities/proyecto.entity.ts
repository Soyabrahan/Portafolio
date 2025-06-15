import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  imagen: string;

  @Column()
  link: string;
}
