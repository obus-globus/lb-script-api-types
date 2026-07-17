import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CriticalsPacket$Mode;
    static values(): CriticalsPacket$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "VANILLA" | "NO_CHEAT_PLUS" | "FALLING" | "LOW" | "DOWN" | "GRIM" | "BLOCKSMC";
}