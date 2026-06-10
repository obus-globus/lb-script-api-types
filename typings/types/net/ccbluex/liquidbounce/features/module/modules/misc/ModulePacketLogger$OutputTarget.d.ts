import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TransferOrigin } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { Packet } from '../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ModulePacketLogger$OutputTarget extends Enum<ModulePacketLogger$OutputTarget> implements Tagged {
    static CHAT: ModulePacketLogger$OutputTarget;
    static Companion: Tagged$Companion;
    static FILE: ModulePacketLogger$OutputTarget;
    static getEntries(): ModulePacketLogger$OutputTarget[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModulePacketLogger$OutputTarget;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    handle(origin: TransferOrigin, packet: Packet<Object>, canceled: boolean, packetId: Identifier): void;
    name(): "CHAT" | "FILE";
}