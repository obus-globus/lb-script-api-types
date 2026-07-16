import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { FluidState } from '../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class ModuleAvoidHazards$Avoid extends Enum<ModuleAvoidHazards$Avoid> implements Tagged {
    static BERRY_BUSH: ModuleAvoidHazards$Avoid;
    static CACTI: ModuleAvoidHazards$Avoid;
    static COBWEB: ModuleAvoidHazards$Avoid;
    static Companion: Tagged$Companion;
    static FIRE: ModuleAvoidHazards$Avoid;
    static LADDERS: ModuleAvoidHazards$Avoid;
    static LAVA: ModuleAvoidHazards$Avoid;
    static MAGMA: ModuleAvoidHazards$Avoid;
    static POWDER_SNOW: ModuleAvoidHazards$Avoid;
    static PRESSURE_PLATES: ModuleAvoidHazards$Avoid;
    static WITHER_ROSE: ModuleAvoidHazards$Avoid;
    static getEntries(): ModuleAvoidHazards$Avoid[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAvoidHazards$Avoid;
    static values(): ModuleAvoidHazards$Avoid[];
    private constructor(tag: string, fullCube: boolean, test: (param0: Block, param1: FluidState, param2: BlockPos) => boolean)
    readonly fullCube: boolean;
    readonly tag: string;
    readonly test: (param0: Block, param1: FluidState, param2: BlockPos) => boolean;
    name(): "CACTI" | "BERRY_BUSH" | "FIRE" | "COBWEB" | "LADDERS" | "PRESSURE_PLATES" | "MAGMA" | "LAVA" | "WITHER_ROSE" | "POWDER_SNOW";
}