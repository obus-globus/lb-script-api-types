import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByIdMap$OutOfBoundsStrategy } from '../../../net/minecraft/util/ByIdMap$OutOfBoundsStrategy.d.ts'
export class ByIdMap extends Object {
    static continuous(paramidGetter: (param0: Object | null) => number, paramvalues: Object | null, paramstrategy: ByIdMap$OutOfBoundsStrategy): (param0: number) => Object | null;
    static sparse(paramidGetter: (param0: Object | null) => number, paramvalues: Object | null, param_default: Object | null): (param0: number) => Object | null;
    constructor()
}