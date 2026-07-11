import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Iterables extends Object {
    static addAll(paramaddTo: (Object | null)[], paramelementsToAdd: (Object | null)[]): boolean;
    static all(paramiterable: (Object | null)[], parampredicate: (param0: Object) => boolean): boolean;
    static any(paramiterable: (Object | null)[], parampredicate: (param0: Object) => boolean): boolean;
    static concat(parama: (Object | null)[], paramb: (Object | null)[]): (Object | null)[];
    static concat(parama: (Object | null)[], paramb: (Object | null)[], paramc: (Object | null)[]): (Object | null)[];
    static concat(parama: (Object | null)[], paramb: (Object | null)[], paramc: (Object | null)[], paramd: (Object | null)[]): (Object | null)[];
    static concat(...paraminputs: Object | null): (Object | null)[];
    static concat(paraminputs: (Object | null)[][]): (Object | null)[];
    static consumingIterable(paramiterable: (Object | null)[]): (Object | null)[];
    static contains(paramiterable: Object[], paramelement: Object): boolean;
    static cycle(...paramelements: Object | null): (Object | null)[];
    static cycle(paramiterable: (Object | null)[]): (Object | null)[];
    static elementsEqual(paramiterable1: Object[], paramiterable2: Object[]): boolean;
    static filter(paramunfiltered: Object[], paramdesiredType: Class<Object>): (Object | null)[];
    static filter(paramunfiltered: (Object | null)[], paramretainIfTrue: (param0: Object) => boolean): (Object | null)[];
    static find(paramiterable: (Object | null)[], parampredicate: (param0: Object) => boolean, paramdefaultValue: Object | null): Object | null;
    static find(paramiterable: (Object | null)[], parampredicate: (param0: Object) => boolean): Object | null;
    static frequency(paramiterable: Object[], paramelement: Object): number;
    static get(paramiterable: (Object | null)[], paramposition: number, paramdefaultValue: Object | null): Object | null;
    static get(paramiterable: (Object | null)[], paramposition: number): Object | null;
    static getFirst(paramiterable: (Object | null)[], paramdefaultValue: Object | null): Object | null;
    static getLast(paramiterable: (Object | null)[], paramdefaultValue: Object | null): Object | null;
    static getLast(paramiterable: (Object | null)[]): Object | null;
    static getOnlyElement(paramiterable: (Object | null)[], paramdefaultValue: Object | null): Object | null;
    static getOnlyElement(paramiterable: (Object | null)[]): Object | null;
    static indexOf(paramiterable: (Object | null)[], parampredicate: (param0: Object) => boolean): number;
    static isEmpty(paramiterable: Object[]): boolean;
    static limit(paramiterable: (Object | null)[], paramlimitSize: number): (Object | null)[];
    static mergeSorted(paramiterables: (Object | null)[][], paramcomparator: (param0: Object) => boolean): (Object | null)[];
    static paddedPartition(paramiterable: (Object | null)[], paramsize: number): (Object | null)[][];
    static partition(paramiterable: (Object | null)[], paramsize: number): (Object | null)[][];
    static removeAll(paramremoveFrom: Object[], paramelementsToRemove: Object[]): boolean;
    static removeIf(paramremoveFrom: (Object | null)[], parampredicate: (param0: Object) => boolean): boolean;
    static retainAll(paramremoveFrom: Object[], paramelementsToRetain: Object[]): boolean;
    static size(paramiterable: Object[]): number;
    static skip(paramiterable: (Object | null)[], paramnumberToSkip: number): (Object | null)[];
    static toArray(paramiterable: (Object | null)[], paramtype: Class<Object>): Object | null;
    static toString(paramiterable: Object[]): string;
    static transform(paramfromIterable: (Object | null)[], paramfunction: (param0: Object) => boolean): (Object | null)[];
    static tryFind(paramiterable: (Object | null)[], parampredicate: (param0: Object) => boolean): Optional<Object>;
    static unmodifiableIterable(paramiterable: (Object | null)[]): (Object | null)[];
    static unmodifiableIterable(paramiterable: (Object | null)[]): (Object | null)[];
    private constructor()
}