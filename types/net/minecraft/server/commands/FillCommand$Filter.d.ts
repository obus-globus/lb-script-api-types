import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockInput } from '../../../../net/minecraft/commands/arguments/blocks/BlockInput.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export interface FillCommand$Filter extends Object{
    filter(region: BoundingBox, pos: BlockPos, block: BlockInput, level: ServerLevel): BlockInput;
}