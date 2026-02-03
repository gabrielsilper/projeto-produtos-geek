import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorias')
export default class Categoria{
    @PrimaryGeneratedColumn("uuid")
     id!: string;

    @Column({ type: "varchar", nullable: false })
    nome!: string;

    @Column({ type: "varchar", nullable: true })
    descricao?: string;

    @CreateDateColumn ({ type: "date", nullable: false })
    dataCriacao!: Date;

    @UpdateDateColumn ({ type: "date", nullable: false })
    dataAtualizacao!: Date;

}