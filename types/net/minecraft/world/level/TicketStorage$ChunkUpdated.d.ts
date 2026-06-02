import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TicketStorage$ChunkUpdated extends Object{
    update(node: number, newLevelFrom: number, onlyDecreased: boolean): void;
}