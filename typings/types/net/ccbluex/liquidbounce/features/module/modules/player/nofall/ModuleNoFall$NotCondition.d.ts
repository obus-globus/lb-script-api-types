import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleNoFall$NotCondition extends Enum<ModuleNoFall$NotCondition> implements BooleanSupplier, Tagged {
    static Companion: Tagged$Companion;
    /**
     * With Elytra - we don't want to reduce fall damage.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall.kt:97}
     */
    static WHILE_GLIDING: ModuleNoFall$NotCondition;
    /**
     * Check if we are holding a mace
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall.kt:104}
     */
    static WITH_MACE: ModuleNoFall$NotCondition;
    static getEntries(): ModuleNoFall$NotCondition[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleNoFall$NotCondition;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "WHILE_GLIDING" | "WITH_MACE";
}