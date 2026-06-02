import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class CriticalsPacket$Mode extends Enum<CriticalsPacket$Mode> implements Tagged {
    static BLOCKSMC: CriticalsPacket$Mode;
    static Companion: Tagged$Companion;
    static DOWN: CriticalsPacket$Mode;
    static FALLING: CriticalsPacket$Mode;
    static GRIM: CriticalsPacket$Mode;
    static LOW: CriticalsPacket$Mode;
    static NO_CHEAT_PLUS: CriticalsPacket$Mode;
    static VANILLA: CriticalsPacket$Mode;
    static getEntries(): CriticalsPacket$Mode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CriticalsPacket$Mode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "VANILLA" | "NO_CHEAT_PLUS" | "FALLING" | "LOW" | "DOWN" | "GRIM" | "BLOCKSMC";
}