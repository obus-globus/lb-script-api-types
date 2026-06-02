import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TicketType } from '../../../../net/minecraft/server/level/TicketType.d.ts'
export class Ticket extends Object {
    static CODEC: MapCodec<Ticket>;
    constructor(type: TicketType, ticketLevel: number)
    private constructor(type: TicketType, ticketLevel: number, ticksLeft: number)
    readonly ticketLevel: number;
    // private ticksLeft: number;
    readonly type: TicketType;
    decreaseTicksLeft(): void;
    getTicketLevel(): number;
    getType(): TicketType;
    isTimedOut(): boolean;
    resetTicksLeft(): void;
    toString(): string;
}