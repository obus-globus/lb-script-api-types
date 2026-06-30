import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ModuleScaffold$SameYMode extends Enum<ModuleScaffold$SameYMode> implements Tagged {
    static Companion: Tagged$Companion;
    static FALLING: ModuleScaffold$SameYMode;
    static HYPIXEL: ModuleScaffold$SameYMode;
    static OFF: ModuleScaffold$SameYMode;
    static ON: ModuleScaffold$SameYMode;
    static getEntries(): ModuleScaffold$SameYMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleScaffold$SameYMode;
    static values(): (Object | null)[];
    private constructor(tag: string, getTargetedBlockPos: (param0: BlockPos) => BlockPos | null)
    readonly getTargetedBlockPos: (param0: BlockPos) => BlockPos | null;
    readonly tag: string;
    name(): "OFF" | "ON" | "FALLING" | "HYPIXEL";
}