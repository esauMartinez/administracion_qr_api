import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'timbres',
})
export class Timbre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  guia: string;

  @Column('text')
  timbre: string;

  @Column('text')
  estatus: string;
}
