import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreCollectors extends Object {
    static onlyElement<T extends unknown>(): Collector<T, Object, T>;
    static toOptional<T extends unknown>(): Collector<T, Object, Optional<T>>;
    private constructor()
}