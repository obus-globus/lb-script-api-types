import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Ticket } from '../../../../net/minecraft/server/level/Ticket.d.ts'
export interface TicketStorage$TicketPredicate extends Object{
    test(ticket: Ticket, chunkPos: number): boolean;
}