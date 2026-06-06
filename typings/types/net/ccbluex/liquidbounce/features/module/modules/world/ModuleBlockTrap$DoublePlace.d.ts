import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBlockTrap$DoublePlace extends Enum<ModuleBlockTrap$DoublePlace> implements Tagged {
    /**
     * Places two blocks above the target's head so that they can't mine the block and at the same time tower up to
     * escape.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L196 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:196}
     */
    static ABOVE: ModuleBlockTrap$DoublePlace;
    /**
     * Places two layers below the target so they can't mine the block below them and possible fall down.
     *
     * Requires {@link PlaceAt.FLOOR} to be enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L202 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:202}
     */
    static BELOW: ModuleBlockTrap$DoublePlace;
    static Companion: Tagged$Companion;
    static getEntries(): ModuleBlockTrap$DoublePlace[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleBlockTrap$DoublePlace;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ABOVE" | "BELOW";
}