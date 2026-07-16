import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class LangCollectors extends Object {
    static collect<T extends unknown, R extends unknown, A extends unknown>(paramarg0: Collector<Object, A, R>, ...paramarg1: T[]): R;
    static joining(): Collector<Object, Object, string>;
    static joining(paramarg0: CharSequence): Collector<Object, Object, string>;
    static joining(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: CharSequence): Collector<Object, Object, string>;
    static joining(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: CharSequence, paramarg3: (param0: Object) => string): Collector<Object, Object, string>;
    private constructor()
}