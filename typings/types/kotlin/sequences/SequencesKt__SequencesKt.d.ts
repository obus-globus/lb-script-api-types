import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { SequenceScope } from '../../kotlin/sequences/SequenceScope.d.ts'
import type { SequencesKt__SequencesJVMKt } from '../../kotlin/sequences/SequencesKt__SequencesJVMKt.d.ts'
export class SequencesKt__SequencesKt extends SequencesKt__SequencesJVMKt {
    static asSequence<T extends unknown>(self: Iterator<T>): Sequence<T>;
    static constrainOnce<T extends unknown>(self: Sequence<T>): Sequence<T>;
    static emptySequence<T extends unknown>(): Sequence<T>;
    static flatMapIndexed<R extends unknown, T extends unknown, C extends unknown>(source: Sequence<T>, transform: (param0: number, param1: T) => C, iterator: (param0: C) => Iterator<R>): Sequence<R>;
    static flatten<T extends unknown>(self: Sequence<Sequence<T>>): Sequence<T>;
    static flattenSequenceOfIterable<T extends unknown>(self: Sequence<T[]>): Sequence<T>;
    static generateSequence<T extends unknown>(seed: T | null, nextFunction: (param0: T) => T | null): Sequence<T>;
    static generateSequence<T extends unknown>(nextFunction: () => T | null): Sequence<T>;
    static generateSequence<T extends unknown>(seedFunction: () => T | null, nextFunction: (param0: T) => T | null): Sequence<T>;
    static ifEmpty<T extends unknown>(self: Sequence<T>, defaultValue: () => Sequence<T>): Sequence<T>;
    static iterator<T extends unknown>(block: (param0: SequenceScope<T>) => void): Iterator<T>;
    static sequence<T extends unknown>(block: (param0: SequenceScope<T>) => void): Sequence<T>;
    static sequenceOf<T extends unknown>(element: T): Sequence<T>;
    static sequenceOf<T extends unknown>(...elements: T[]): Sequence<T>;
    static shuffled<T extends unknown>(self: Sequence<T>): Sequence<T>;
    static shuffled<T extends unknown>(self: Sequence<T>, random: Random): Sequence<T>;
    static unzip<T extends unknown, R extends unknown>(self: Sequence<Pair<T, R>>): Pair<T[], R[]>;
}