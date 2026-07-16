import type { Type } from '../../../../../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { FabricBlockEntityTypeBuilder$Factory } from '../../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/block/entity/FabricBlockEntityTypeBuilder$Factory.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FabricBlockEntityTypeBuilder<T extends BlockEntity> extends Object {
    static create<T extends BlockEntity>(paramarg0: (param0: BlockPos, param1: BlockState) => T, ...paramarg1: Block[]): FabricBlockEntityTypeBuilder<T>;
    private constructor(arg0: (param0: BlockPos, param1: BlockState) => T)
    // private blocks: Block[];
    // private canPotentiallyExecuteCommands: boolean;
    // private factory: (param0: BlockPos, param1: BlockState) => T;
    addBlock(arg0: Block): FabricBlockEntityTypeBuilder<T>;
    addBlocks(arg0: Block[]): FabricBlockEntityTypeBuilder<T>;
    addBlocks(...arg0: Block[]): FabricBlockEntityTypeBuilder<T>;
    build(): BlockEntityType<T>;
    build(arg0: Type<Object>): BlockEntityType<T>;
    canPotentiallyExecuteCommands(arg0: boolean): FabricBlockEntityTypeBuilder<T>;
}