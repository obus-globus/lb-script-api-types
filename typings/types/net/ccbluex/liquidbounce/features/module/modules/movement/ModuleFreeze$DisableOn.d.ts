import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleFreeze$DisableOn extends Enum<ModuleFreeze$DisableOn> implements Tagged {
    static Companion: Tagged$Companion;
    static Flag: ModuleFreeze$DisableOn;
    static InLiquid: ModuleFreeze$DisableOn;
    static OnGround: ModuleFreeze$DisableOn;
    static OnMovementInput: ModuleFreeze$DisableOn;
    static OnUseItem: ModuleFreeze$DisableOn;
    static Void: ModuleFreeze$DisableOn;
    static getEntries(): ModuleFreeze$DisableOn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFreeze$DisableOn;
    static values(): ModuleFreeze$DisableOn[];
    private constructor(tag: string, trigger: (() => boolean) | null)
    readonly tag: string;
    readonly trigger: (() => boolean) | null;
    name(): "Flag" | "OnGround" | "OnMovementInput" | "InLiquid" | "Void" | "OnUseItem";
}