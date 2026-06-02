import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KillAuraAutoBlock$UnblockMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "STOP_USING_ITEM" | "CHANGE_SLOT" | "SWAP_HAND" | "NONE";
}