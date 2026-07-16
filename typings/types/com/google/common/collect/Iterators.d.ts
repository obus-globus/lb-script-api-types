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
    static addAll(paramaddTo: (Object | null)[], paramiterator: Iterator<Object>): boolean;
    static advance(paramiterator: Iterator<Object>, paramnumberToAdvance: number): number;
    static all(paramiterator: Iterator<Object>, parampredicate: (param0: Object) => boolean): boolean;
    static any(paramiterator: Iterator<Object>, parampredicate: (param0: Object) => boolean): boolean;
    static asEnumeration(paramiterator: Iterator<Object>): Enumeration<Object>;
    static concat(parama: Iterator<Object>, paramb: Iterator<Object>): Iterator<Object>;
    static concat(parama: Iterator<Object>, paramb: Iterator<Object>, paramc: Iterator<Object>): Iterator<Object>;
    static concat(parama: Iterator<Object>, paramb: Iterator<Object>, paramc: Iterator<Object>, paramd: Iterator<Object>): Iterator<Object>;
    static concat(...paraminputs: Iterator<Object>[]): Iterator<Object>;
    static concat(paraminputs: Iterator<Iterator<Object>>): Iterator<Object>;
    static consumingIterator(paramiterator: Iterator<Object>): Iterator<Object>;
    static contains(paramiterator: Iterator<Object>, paramelement: Object): boolean;
    static cycle(...paramelements: (Object | null)[]): Iterator<Object>;
    static cycle(paramiterable: (Object | null)[]): Iterator<Object>;
    static elementsEqual(paramiterator1: Iterator<Object>, paramiterator2: Iterator<Object>): boolean;
    static filter(paramunfiltered: Iterator<Object>, paramdesiredType: Class<Object>): UnmodifiableIterator<Object>;
    static filter(paramunfiltered: Iterator<Object>, paramretainIfTrue: (param0: Object) => boolean): UnmodifiableIterator<Object>;
    static find(paramiterator: Iterator<Object>, parampredicate: (param0: Object) => boolean, paramdefaultValue: Object | null): Object | null;
    static find(paramiterator: Iterator<Object>, parampredicate: (param0: Object) => boolean): Object | null;
    static forArray(...paramarray: (Object | null)[]): UnmodifiableIterator<Object>;
    static forEnumeration(paramenumeration: Enumeration<Object>): UnmodifiableIterator<Object>;
    static frequency(paramiterator: Iterator<Object>, paramelement: Object): number;
    static get(paramiterator: Iterator<Object>, paramposition: number, paramdefaultValue: Object | null): Object | null;
    static get(paramiterator: Iterator<Object>, paramposition: number): Object | null;
    static getLast(paramiterator: Iterator<Object>, paramdefaultValue: Object | null): Object | null;
    static getLast(paramiterator: Iterator<Object>): Object | null;
    static getNext(paramiterator: Iterator<Object>, paramdefaultValue: Object | null): Object | null;
    static getOnlyElement(paramiterator: Iterator<Object>, paramdefaultValue: Object | null): Object | null;
    static getOnlyElement(paramiterator: Iterator<Object>): Object | null;
    static indexOf(paramiterator: Iterator<Object>, parampredicate: (param0: Object) => boolean): number;
    static limit(paramiterator: Iterator<Object>, paramlimitSize: number): Iterator<Object>;
    static mergeSorted(paramiterators: Iterator<Object>[], paramcomparator: (param0: Object, param1: Object) => number): UnmodifiableIterator<Object>;
    static paddedPartition(paramiterator: Iterator<Object>, paramsize: number): UnmodifiableIterator<(Object | null)[]>;
    static partition(paramiterator: Iterator<Object>, paramsize: number): UnmodifiableIterator<(Object | null)[]>;
    static peekingIterator(paramiterator: PeekingIterator<Object>): PeekingIterator<Object>;
    static peekingIterator(paramiterator: Iterator<Object>): PeekingIterator<Object>;
    static removeAll(paramremoveFrom: Iterator<Object>, paramelementsToRemove: Object[]): boolean;
    static removeIf(paramremoveFrom: Iterator<Object>, parampredicate: (param0: Object) => boolean): boolean;
    static retainAll(paramremoveFrom: Iterator<Object>, paramelementsToRetain: Object[]): boolean;
    static singletonIterator(paramvalue: Object | null): UnmodifiableIterator<Object>;
    static size(paramiterator: Iterator<Object>): number;
    static toArray(paramiterator: Iterator<Object>, paramtype: Class<Object>): (Object | null)[];
    static toString(paramiterator: Iterator<Object>): string;
    static transform(paramfromIterator: Iterator<Object>, paramfunction: (param0: Object) => Object | null): Iterator<Object>;
    static tryFind(paramiterator: Iterator<Object>, parampredicate: (param0: Object) => boolean): Optional<Object>;
    static unmodifiableIterator(paramiterator: UnmodifiableIterator<Object>): UnmodifiableIterator<Object>;
    static unmodifiableIterator(paramiterator: Iterator<Object>): UnmodifiableIterator<Object>;
    private constructor()
}