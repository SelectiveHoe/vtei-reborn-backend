import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('pages')
export class PageEntity {
  @PrimaryColumn()
  id: number;

  @Column('jsonb')
  content: unknown;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
