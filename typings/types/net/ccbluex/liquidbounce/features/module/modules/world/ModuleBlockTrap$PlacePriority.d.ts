import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Determines how the blocks are added to the placement queue.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:168}
 */
export class ModuleBlockTrap$PlacePriority extends Enum<ModuleBlockTrap$PlacePriority> implements Tagged {
    static CLOSEST: ModuleBlockTrap$PlacePriority;
    static Companion: Tagged$Companion;
    static FURTHEST: ModuleBlockTrap$PlacePriority;
    static HIGHEST: ModuleBlockTrap$PlacePriority;
    static LOWEST: ModuleBlockTrap$PlacePriority;
    static getEntries(): ModuleBlockTrap$PlacePriority[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBlockTrap$PlacePriority;
    static values(): ModuleBlockTrap$PlacePriority[];
    private constructor(tag: string, comparator: (param0: BlockPos, param1: BlockPos) => number)
    readonly comparator: (param0: BlockPos, param1: BlockPos) => number;
    readonly tag: string;
    name(): "CLOSEST" | "FURTHEST" | "HIGHEST" | "LOWEST";
}