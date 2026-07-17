import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleNoFall$NotCondition extends Enum<ModuleNoFall$NotCondition> implements BooleanSupplier, Tagged {
    static Companion: Tagged$Companion;
    static WHILE_GLIDING: ModuleNoFall$NotCondition;
    static WITH_MACE: ModuleNoFall$NotCondition;
    static getEntries(): ModuleNoFall$NotCondition[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleNoFall$NotCondition;
    static values(): ModuleNoFall$NotCondition[];
    private constructor(tag: string)
    readonly tag: string;
    getAsBoolean(): boolean;
    name(): "WHILE_GLIDING" | "WITH_MACE";
}