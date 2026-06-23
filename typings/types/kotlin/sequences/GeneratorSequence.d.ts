import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class GeneratorSequence<T extends unknown> extends Object implements Sequence<T> {
    constructor(getInitialValue: () => T | null, getNextValue: (param0: T) => T | null)
    // private getInitialValue: () => T | null;
    // private getNextValue: (param0: T) => T | null;
    iterator(): Iterator<T>;
}