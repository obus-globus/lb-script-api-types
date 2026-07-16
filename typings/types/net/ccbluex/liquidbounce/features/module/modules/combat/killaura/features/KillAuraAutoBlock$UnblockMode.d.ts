import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraAutoBlock$UnblockMode extends Enum<KillAuraAutoBlock$UnblockMode> implements Tagged {
    static CHANGE_SLOT: KillAuraAutoBlock$UnblockMode;
    static Companion: Tagged$Companion;
    static NONE: KillAuraAutoBlock$UnblockMode;
    static STOP_USING_ITEM: KillAuraAutoBlock$UnblockMode;
    static SWAP_HAND: KillAuraAutoBlock$UnblockMode;
    static getEntries(): KillAuraAutoBlock$UnblockMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): KillAuraAutoBlock$UnblockMode;
    static values(): KillAuraAutoBlock$UnblockMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "STOP_USING_ITEM" | "CHANGE_SLOT" | "SWAP_HAND" | "NONE";
}