import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleHoleFiller$Features extends Enum<ModuleHoleFiller$Features> implements Tagged {
    /**
     * Checks the movement angle.
     * Won't fill holes that lie further away than 30° from the entities' velocity direction.
     * Only applies when smart is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt#L297 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt:297}
     */
    static CHECK_MOVEMENT: ModuleHoleFiller$Features;
    static Companion: Tagged$Companion;
    /**
     * Only fills 1x1 holes - ignores 2x2 and 2x1 holes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt#L304 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt:304}
     */
    static ONLY_ONE_BY_ONE: ModuleHoleFiller$Features;
    /**
     * Only operate when you're in a hole yourself.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt#L292 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt:292}
     */
    static ONLY_WHEN_SELF_IN_HOLE: ModuleHoleFiller$Features;
    /**
     * Prevents the module from filling the hole you want to enter.
     * The criteria to allow filling are:
     * The hole is higher than you, the hole doesn't intersect your own fill area, or you are already in a hole.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt#L285 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt:285}
     */
    static PREVENT_SELF_FILL: ModuleHoleFiller$Features;
    /**
     * When enabled, only places when entities are about to enter a hole, otherwise fills all holes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt#L280 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleHoleFiller.kt:280}
     */
    static SMART: ModuleHoleFiller$Features;
    static getEntries(): ModuleHoleFiller$Features[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleHoleFiller$Features;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SMART" | "PREVENT_SELF_FILL" | "ONLY_WHEN_SELF_IN_HOLE" | "CHECK_MOVEMENT" | "ONLY_ONE_BY_ONE";
}