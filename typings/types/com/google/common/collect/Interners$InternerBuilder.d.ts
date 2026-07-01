import type { Interner } from '../../../../com/google/common/collect/Interner.d.ts'
import type { MapMaker } from '../../../../com/google/common/collect/MapMaker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interners$InternerBuilder extends Object {
    constructor(arg0: any)
    // private mapMaker: MapMaker;
    // private strong: boolean;
    build<E extends unknown>(): Interner<E>;
    concurrencyLevel(concurrencyLevel: number): Interners$InternerBuilder;
    strong(): Interners$InternerBuilder;
    weak(): Interners$InternerBuilder;
}