import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByIdMap$OutOfBoundsStrategy } from '../../../net/minecraft/util/ByIdMap$OutOfBoundsStrategy.d.ts'
export class ByIdMap extends Object {
    static continuous<T extends unknown>(paramidGetter: (param0: T) => number, paramvalues: T[], paramstrategy: ByIdMap$OutOfBoundsStrategy): (param0: number) => T;
    static sparse<T extends unknown>(paramidGetter: (param0: T) => number, paramvalues: T[], param_default: T): (param0: number) => T;
    constructor()
}