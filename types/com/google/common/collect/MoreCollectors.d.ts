import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MoreCollectors extends Object {
    static onlyElement(): Collector<Object, Object, Object>;
    static toOptional(): Collector<Object, Object, Object>;
    private constructor()
}