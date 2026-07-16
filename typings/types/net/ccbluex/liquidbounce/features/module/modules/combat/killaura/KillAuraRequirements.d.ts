import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class KillAuraRequirements extends Enum<KillAuraRequirements> implements BooleanSupplier, Tagged {
    static CLICK: KillAuraRequirements;
    static Companion: Tagged$Companion;
    static EMPTY_HAND: KillAuraRequirements;
    static NOT_BREAKING: KillAuraRequirements;
    static VANILLA_NAME: KillAuraRequirements;
    static WEAPON: KillAuraRequirements;
    static getEntries(): KillAuraRequirements[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KillAuraRequirements;
    static values(): KillAuraRequirements[];
    private constructor(tag: string)
    readonly tag: string;
    getAsBoolean(): boolean;
    name(): "CLICK" | "WEAPON" | "EMPTY_HAND" | "VANILLA_NAME" | "NOT_BREAKING";
}