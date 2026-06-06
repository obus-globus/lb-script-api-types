import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode extends Enum<ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * Rotates the player before the block is placed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L218 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:218}
     */
    static NORMAL: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    /**
     * Rotates the player on the tick the block is placed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L223 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:223}
     */
    static ON_TICK: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    /**
     * Similar to ON_TICK, but the player will keep the rotation after placing
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L228 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:228}
     */
    static ON_TICK_SNAP: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static getEntries(): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "ON_TICK" | "ON_TICK_SNAP";
}