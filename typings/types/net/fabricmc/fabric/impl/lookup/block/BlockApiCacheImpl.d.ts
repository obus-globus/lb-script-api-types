import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockApiCache } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiCache.d.ts'
import type { BlockApiLookup } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup.d.ts'
import type { BlockApiLookup$BlockApiProvider } from '../../../../../../net/fabricmc/fabric/api/lookup/v1/block/BlockApiLookup$BlockApiProvider.d.ts'
import type { BlockApiLookupImpl } from '../../../../../../net/fabricmc/fabric/impl/lookup/block/BlockApiLookupImpl.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockApiCacheImpl<A extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object implements BlockApiCache<A, C> {
    static create(paramarg0: BlockApiLookup<Object, Object>, paramarg1: ServerLevel, paramarg2: BlockPos): BlockApiCache<Object, Object>;
    constructor(arg0: BlockApiLookupImpl<A, C>, arg1: ServerLevel, arg2: BlockPos)
    // private blockEntityCacheValid: boolean;
    // private cachedBlockEntity: BlockEntity;
    // private cachedProvider: (param0: A, param1: C, param2: Level, param3: BlockPos, param4: BlockState) => unknown;
    // private lastState: BlockState;
    readonly level: ServerLevel;
    readonly lookup: BlockApiLookupImpl<A, C>;
    readonly pos: BlockPos;
    find(arg0: C): A;
    find(arg0: C): A;
    find(arg0: BlockState, arg1: C): A;
    getBlockEntity(): BlockEntity;
    getLevel(): ServerLevel;
    getLookup(): BlockApiLookupImpl<A, C>;
    getPos(): BlockPos;
    invalidate(): void;
}