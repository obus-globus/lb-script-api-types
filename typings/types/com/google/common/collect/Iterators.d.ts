import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { PeekingIterator } from '../../../../com/google/common/collect/PeekingIterator.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Iterators extends Object {
    static addAll<T extends unknown>(paramaddTo: T[], paramiterator: Iterator<T>): boolean;
    static advance(paramiterator: Iterator<Object>, paramnumberToAdvance: number): number;
    static all<T extends unknown>(paramiterator: Iterator<T>, parampredicate: (param0: Object) => boolean): boolean;
    static any<T extends unknown>(paramiterator: Iterator<T>, parampredicate: (param0: Object) => boolean): boolean;
    static asEnumeration<T extends unknown>(paramiterator: Iterator<T>): Enumeration<T>;
    static concat<T extends unknown>(parama: Iterator<T>, paramb: Iterator<T>): Iterator<T>;
    static concat<T extends unknown>(parama: Iterator<T>, paramb: Iterator<T>, paramc: Iterator<T>): Iterator<T>;
    static concat<T extends unknown>(parama: Iterator<T>, paramb: Iterator<T>, paramc: Iterator<T>, paramd: Iterator<T>): Iterator<T>;
    static concat<T extends unknown>(...paraminputs: Iterator<T>[]): Iterator<T>;
    static concat<T extends unknown>(paraminputs: Iterator<Iterator<T>>): Iterator<T>;
    static consumingIterator<T extends unknown>(paramiterator: Iterator<T>): Iterator<T>;
    static contains(paramiterator: Iterator<Object>, paramelement: Object): boolean;
    static cycle<T extends unknown>(...paramelements: T[]): Iterator<T>;
    static cycle<T extends unknown>(paramiterable: T[]): Iterator<T>;
    static elementsEqual(paramiterator1: Iterator<Object>, paramiterator2: Iterator<Object>): boolean;
    static filter<T extends unknown>(paramunfiltered: Iterator<Object>, paramdesiredType: Class<T>): UnmodifiableIterator<T>;
    static filter<T extends unknown>(paramunfiltered: Iterator<T>, paramretainIfTrue: (param0: Object) => boolean): UnmodifiableIterator<T>;
    static find<T extends unknown>(paramiterator: Iterator<T>, parampredicate: (param0: Object) => boolean, paramdefaultValue: T): T;
    static find<T extends unknown>(paramiterator: Iterator<T>, parampredicate: (param0: Object) => boolean): T;
    static forArray<T extends unknown>(...paramarray: T[]): UnmodifiableIterator<T>;
    static forEnumeration<T extends unknown>(paramenumeration: Enumeration<T>): UnmodifiableIterator<T>;
    static frequency(paramiterator: Iterator<Object>, paramelement: Object): number;
    static get<T extends unknown>(paramiterator: Iterator<T>, paramposition: number, paramdefaultValue: T): T;
    static get<T extends unknown>(paramiterator: Iterator<T>, paramposition: number): T;
    static getLast<T extends unknown>(paramiterator: Iterator<T>, paramdefaultValue: T): T;
    static getLast<T extends unknown>(paramiterator: Iterator<T>): T;
    static getNext<T extends unknown>(paramiterator: Iterator<T>, paramdefaultValue: T): T;
    static getOnlyElement<T extends unknown>(paramiterator: Iterator<T>, paramdefaultValue: T): T;
    static getOnlyElement<T extends unknown>(paramiterator: Iterator<T>): T;
    static indexOf<T extends unknown>(paramiterator: Iterator<T>, parampredicate: (param0: Object) => boolean): number;
    static limit<T extends unknown>(paramiterator: Iterator<T>, paramlimitSize: number): Iterator<T>;
    static mergeSorted<T extends unknown>(paramiterators: Iterator<T>[], paramcomparator: (param0: Object, param1: Object) => number): UnmodifiableIterator<T>;
    static paddedPartition<T extends unknown>(paramiterator: Iterator<T>, paramsize: number): UnmodifiableIterator<T[]>;
    static partition<T extends unknown>(paramiterator: Iterator<T>, paramsize: number): UnmodifiableIterator<T[]>;
    static peekingIterator<T extends unknown>(paramiterator: PeekingIterator<T>): PeekingIterator<T>;
    static peekingIterator<T extends unknown>(paramiterator: Iterator<T>): PeekingIterator<T>;
    static removeAll(paramremoveFrom: Iterator<Object>, paramelementsToRemove: Object[]): boolean;
    static removeIf<T extends unknown>(paramremoveFrom: Iterator<T>, parampredicate: (param0: Object) => boolean): boolean;
    static retainAll(paramremoveFrom: Iterator<Object>, paramelementsToRetain: Object[]): boolean;
    static singletonIterator<T extends unknown>(paramvalue: T): UnmodifiableIterator<T>;
    static size(paramiterator: Iterator<Object>): number;
    static toArray<T extends unknown>(paramiterator: Iterator<T>, paramtype: Class<T>): T[];
    static toString(paramiterator: Iterator<Object>): string;
    static transform<F extends unknown, T extends unknown>(paramfromIterator: Iterator<F>, paramfunction: (param0: Object) => T): Iterator<T>;
    static tryFind<T extends unknown>(paramiterator: Iterator<T>, parampredicate: (param0: Object) => boolean): Optional<T>;
    static unmodifiableIterator<T extends unknown>(paramiterator: UnmodifiableIterator<T>): UnmodifiableIterator<T>;
    static unmodifiableIterator<T extends unknown>(paramiterator: Iterator<T>): UnmodifiableIterator<T>;
    private constructor()
}