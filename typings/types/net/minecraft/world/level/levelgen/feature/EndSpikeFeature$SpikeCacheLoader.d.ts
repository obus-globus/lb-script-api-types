import type { Function } from '../../../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../../../com/google/common/base/Supplier.d.ts'
import type { CacheLoader } from '../../../../../../com/google/common/cache/CacheLoader.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EndSpikeFeature$EndSpike } from '../../../../../../net/minecraft/world/level/levelgen/feature/EndSpikeFeature$EndSpike.d.ts'
export class EndSpikeFeature$SpikeCacheLoader extends CacheLoader<number, EndSpikeFeature$EndSpike[]> {
    static asyncReloading(paramloader: CacheLoader<Object, Object>, paramexecutor: Executor): CacheLoader<Object, Object>;
    static from(paramfunction: (param0: Object | null) => Object | null): CacheLoader<Object, Object>;
    static from(paramsupplier: () => Object | null): CacheLoader<Object, Object>;
    private constructor()
    load(seed: number): EndSpikeFeature$EndSpike[];
}