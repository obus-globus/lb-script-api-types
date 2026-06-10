import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSpeed$NotCondition extends Enum<ModuleSpeed$NotCondition> implements Tagged {
    static Companion: Tagged$Companion;
    static FALL_FLYING: ModuleSpeed$NotCondition;
    static IN_LIQUID: ModuleSpeed$NotCondition;
    static SCAFFOLD: ModuleSpeed$NotCondition;
    static SNEAKING: ModuleSpeed$NotCondition;
    static USING_ITEM: ModuleSpeed$NotCondition;
    static getEntries(): ModuleSpeed$NotCondition[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSpeed$NotCondition;
    static values(): (Object | null)[];
    private constructor(tag: string, condition: () => boolean)
    readonly condition: () => boolean;
    readonly tag: string;
    name(): "USING_ITEM" | "SCAFFOLD" | "SNEAKING" | "FALL_FLYING" | "IN_LIQUID";
}