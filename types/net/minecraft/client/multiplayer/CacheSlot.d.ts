import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CacheSlot$Cleaner } from '../../../../net/minecraft/client/multiplayer/CacheSlot$Cleaner.d.ts'
export class CacheSlot<C extends CacheSlot$Cleaner<C>, D extends Object | number | string | boolean> extends Object {
    constructor(operation: (param0: C) => D)
    // private context: C;
    // private operation: (param0: C) => D;
    // private value: D;
    clear(): void;
    compute(context: C): D;
}