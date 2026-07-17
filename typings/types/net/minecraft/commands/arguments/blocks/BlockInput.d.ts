import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockInWorld } from '../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockInput extends Object implements Predicate<BlockInWorld> {
    constructor(state: BlockState, properties: Property<any>[], tag: CompoundTag)
    // private properties: Property<any>[];
    readonly state: BlockState;
    // private tag: CompoundTag;
    and(arg0: (param0: BlockInWorld) => boolean): (param0: BlockInWorld) => boolean;
    getDefinedProperties(): Property<any>[];
    getState(): BlockState;
    negate(): (param0: BlockInWorld) => boolean;
    or(arg0: (param0: BlockInWorld) => boolean): (param0: BlockInWorld) => boolean;
    // private overwriteWithDefinedProperties(state: BlockState): BlockState;
    place(level: ServerLevel, pos: BlockPos, update: number): boolean;
    test(level: ServerLevel, pos: BlockPos): boolean;
    test(blockInWorld: BlockInWorld): boolean;
}