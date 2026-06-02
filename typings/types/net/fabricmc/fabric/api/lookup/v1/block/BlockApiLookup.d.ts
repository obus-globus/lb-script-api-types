import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockApiLookup$BlockApiProvider } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup$BlockApiProvider.d.ts'
import type { BlockApiLookup$BlockEntityApiProvider } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup$BlockEntityApiProvider.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockApiLookup<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object{
    apiClass(): Class<A>;
    contextClass(): Class<C>;
    find(arg0: Level, arg1: BlockPos, arg2: C): A;
    find(arg0: Level, arg1: BlockPos, arg2: BlockState, arg3: BlockEntity, arg4: C): A;
    getId(): Identifier;
    getProvider(arg0: Block): (param0: A, param1: C, param2: Level, param3: BlockPos, param4: BlockState) => unknown;
    registerFallback(arg0: (param0: A, param1: C, param2: Level, param3: BlockPos, param4: BlockState) => unknown): void;
    registerForBlockEntities(arg0: (param0: A, param1: C) => unknown, arg1: BlockEntityType<Object>[]): void;
    registerForBlockEntity(arg0: (param0: T, param1: C) => A, arg1: BlockEntityType<T>): void;
    registerForBlocks(arg0: (param0: A, param1: C, param2: Level, param3: BlockPos, param4: BlockState) => unknown, arg1: Block[]): void;
    registerSelf(arg0: BlockEntityType<Object>[]): void;
}