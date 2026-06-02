import type { Object } from '../../java/lang/Object.d.ts'
import type { Function0 } from '../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class GeneratorSequence<T extends Object | number | string | boolean> extends Object implements Sequence<T> {
    constructor(getInitialValue: Function0<T>, getNextValue: Function1<T, T>)
    // private getInitialValue: () => T | null;
    // private getNextValue: (param0: T) => T | null;
    iterator(): Iterator<T>;
}