import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { FabricBlockState } from '../../../../../../net/fabricmc/fabric/api/block/v1/FabricBlockState.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockAndLightGetter } from '../../../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockBehaviour$BlockStateBase } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$BlockStateBase.d.ts'
import type { Property } from '../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockState extends BlockBehaviour$BlockStateBase implements FabricBlockState {
    static CODEC: Codec<BlockState>;
    static NAME_TAG: string;
    static PROPERTIES_TAG: string;
    constructor(owner: Block, propertyKeys: Property<any>[], propertyValues: Comparable<Object>[])
    asState(): BlockState;
    getAppearance(arg0: BlockAndLightGetter, arg1: BlockPos, arg2: Direction, arg3: BlockState, arg4: BlockPos): BlockState;
}