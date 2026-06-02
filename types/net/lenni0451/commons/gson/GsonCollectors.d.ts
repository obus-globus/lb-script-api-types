import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonCollectors extends Object {
    static toArray(): Collector<Object, Object, GsonElement[]>;
    static toObject(paramarg0: (param0: Object | null) => string, paramarg1: (param0: Object | null) => Object | null): Collector<Object, Object, Map$Entry<string, GsonElement>[]>;
    constructor()
}