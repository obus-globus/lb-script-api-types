import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Determines how the blocks are added to the placement queue.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:168}
 */
export class ModuleBlockTrap$PlacePriority extends Enum<ModuleBlockTrap$PlacePriority> implements Tagged {
    static CLOSEST: ModuleBlockTrap$PlacePriority;
    static Companion: Tagged$Companion;
    static FURTHEST: ModuleBlockTrap$PlacePriority;
    static HIGHEST: ModuleBlockTrap$PlacePriority;
    static LOWEST: ModuleBlockTrap$PlacePriority;
    static getEntries(): ModuleBlockTrap$PlacePriority[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleBlockTrap$PlacePriority;
    static values(): ModuleBlockTrap$PlacePriority[];
    private constructor(tag: string, comparator: (param0: BlockPos, param1: BlockPos) => number)
    readonly comparator: (param0: BlockPos, param1: BlockPos) => number;
    readonly tag: string;
    name(): "CLOSEST" | "FURTHEST" | "HIGHEST" | "LOWEST";
}