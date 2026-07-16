import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { BlockInput } from '../../../../net/minecraft/commands/arguments/blocks/BlockInput.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { FillCommand$Affector } from '../../../../net/minecraft/server/commands/FillCommand$Affector.d.ts'
import type { FillCommand$Filter } from '../../../../net/minecraft/server/commands/FillCommand$Filter.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class FillCommand$Mode extends Enum<FillCommand$Mode> {
    static DESTROY: FillCommand$Mode;
    static HOLLOW: FillCommand$Mode;
    static OUTLINE: FillCommand$Mode;
    static REPLACE: FillCommand$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FillCommand$Mode;
    static values(): FillCommand$Mode[];
    private constructor(affector: (param0: ServerLevel, param1: BlockPos) => boolean, filter: (param0: BoundingBox, param1: BlockPos, param2: BlockInput, param3: ServerLevel) => BlockInput)
    affector: (param0: ServerLevel, param1: BlockPos) => boolean;
    filter: (param0: BoundingBox, param1: BlockPos, param2: BlockInput, param3: ServerLevel) => BlockInput;
    name(): "REPLACE" | "OUTLINE" | "HOLLOW" | "DESTROY";
}