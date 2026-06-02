import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PacketType<T extends Packet<Object>> extends Record {
    constructor(flow: PacketFlow, id: Identifier)
    // private flow: PacketFlow;
    // private id: Identifier;
    equals(o: Object | null): boolean;
    flow(): PacketFlow;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}