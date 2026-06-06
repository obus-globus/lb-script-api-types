import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ModuleScaffold$SameYMode extends Enum<ModuleScaffold$SameYMode> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * Places blocks at the same Y level as the player, but only if the player is not falling
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L157 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:157}
     */
    static FALLING: ModuleScaffold$SameYMode;
    /**
     * Similar to FALLING, but only when a certain velocity is triggered and after
     * 2 jumps
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L162 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:162}
     */
    static HYPIXEL: ModuleScaffold$SameYMode;
    static OFF: ModuleScaffold$SameYMode;
    /**
     * Places blocks at the same Y level as the player
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/ModuleScaffold.kt:152}
     */
    static ON: ModuleScaffold$SameYMode;
    static getEntries(): ModuleScaffold$SameYMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleScaffold$SameYMode;
    static values(): (Object | null)[];
    private constructor(tag: string, getTargetedBlockPos: (param0: BlockPos) => BlockPos | null)
    readonly getTargetedBlockPos: (param0: BlockPos) => BlockPos | null;
    readonly tag: string;
    name(): "OFF" | "ON" | "FALLING" | "HYPIXEL";
}