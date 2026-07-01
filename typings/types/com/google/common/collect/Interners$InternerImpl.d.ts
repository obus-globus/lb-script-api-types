import type { Interner } from '../../../../com/google/common/collect/Interner.d.ts'
import type { MapMaker } from '../../../../com/google/common/collect/MapMaker.d.ts'
import type { MapMaker$Dummy } from '../../../../com/google/common/collect/MapMaker$Dummy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Interners$InternerImpl<E extends unknown> extends Object implements Interner<E> {
    constructor(arg0: MapMaker, arg1: any)
    // private map: Map<E, MapMaker$Dummy>;
    intern(sample: E): E;
}