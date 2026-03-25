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
  qr: string;

  @Column('text')
  estatus: string;

  @Column('text')
  qrCCP: string;

  @Column('text')
  linkCP: string;
}
