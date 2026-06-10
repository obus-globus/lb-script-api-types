import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
export class MovePacketType extends Enum<MovePacketType> implements Tagged {
    static Companion: Tagged$Companion;
    static FULL: MovePacketType;
    static LOOK_AND_ON_GROUND: MovePacketType;
    static ON_GROUND_ONLY: MovePacketType;
    static POSITION_AND_ON_GROUND: MovePacketType;
    static getEntries(): MovePacketType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MovePacketType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    generatePacket(): ServerboundMovePlayerPacket;
    name(): "ON_GROUND_ONLY" | "POSITION_AND_ON_GROUND" | "LOOK_AND_ON_GROUND" | "FULL";
}