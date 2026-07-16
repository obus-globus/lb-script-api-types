import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonCollectors extends Object {
    static toArray<T extends GsonElement>(): Collector<T, Object, GsonElement[]>;
    static toObject<P extends unknown, V extends GsonElement>(paramarg0: (param0: P) => string, paramarg1: (param0: P) => V): Collector<P, Object, Map$Entry<string, GsonElement>[]>;
    constructor()
}