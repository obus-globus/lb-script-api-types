import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Determines how the blocks are added to the placement queue.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:168}
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
    static values(): (Object | null)[];
    private constructor(tag: string, comparator: (param0: Object) => boolean)
    readonly comparator: (param0: Object) => boolean;
    readonly tag: string;
    name(): "CLOSEST" | "FURTHEST" | "HIGHEST" | "LOWEST";
}