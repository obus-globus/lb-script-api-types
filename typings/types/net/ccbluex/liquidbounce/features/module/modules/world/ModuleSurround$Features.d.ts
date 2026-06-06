import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSurround$Features extends Enum<ModuleSurround$Features> implements Tagged {
    /**
     * Runs {@link CommandCenter} when the module is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L387 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:387}
     */
    static CENTER: ModuleSurround$Features;
    static Companion: Tagged$Companion;
    /**
     * Places blocks below the surround so that enemies can't mine the block bellow you making you fall down.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L406 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:406}
     */
    static DOWN: ModuleSurround$Features;
    /**
     * Extends when entities block placement spots.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L392 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:392}
     */
    static EXTEND: ModuleSurround$Features;
    /**
     * When enabled, the surround won't build 2x1 or 2x2 holes if we already are in a completed 1x1 hole, even if
     * we block replacements.
     *
     * This should only be enabled if no wall placements are possible, or we have a significantly lower ping
     * than our opponent.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt#L397 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleSurround.kt:397}
     */
    static NO_WASTE: ModuleSurround$Features;
    static getEntries(): ModuleSurround$Features[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSurround$Features;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CENTER" | "EXTEND" | "NO_WASTE" | "DOWN";
}