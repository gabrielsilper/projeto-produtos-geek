import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Categoria from './categoria';

@Entity('produtos')
export default class Produto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  nome!: string;

  @Column({ type: 'varchar', nullable: true })
  descricao?: string;

  @Column({ type: 'decimal', nullable: false })
  preco!: number;

  @Column({ type: 'int', nullable: false })
  estoque?: number;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao!: Date;

  @UpdateDateColumn({ name: 'data_atualizacao' })
  dataAtualizacao!: Date;

  @ManyToOne(() => Categoria, { onDelete: 'NO ACTION' })
  @JoinColumn({ name: 'categoria_id' })
  categoria!: Categoria;
}
