import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Iterables extends Object {
    static addAll<T extends unknown>(paramaddTo: T[], paramelementsToAdd: T[]): boolean;
    static all<T extends unknown>(paramiterable: T[], parampredicate: (param0: Object) => boolean): boolean;
    static any<T extends unknown>(paramiterable: T[], parampredicate: (param0: Object) => boolean): boolean;
    static concat<T extends unknown>(parama: T[], paramb: T[]): T[];
    static concat<T extends unknown>(parama: T[], paramb: T[], paramc: T[]): T[];
    static concat<T extends unknown>(parama: T[], paramb: T[], paramc: T[], paramd: T[]): T[];
    static concat<T extends unknown>(...paraminputs: T[][]): T[];
    static concat<T extends unknown>(paraminputs: T[][]): T[];
    static consumingIterable<T extends unknown>(paramiterable: T[]): T[];
    static contains(paramiterable: Object[], paramelement: Object): boolean;
    static cycle<T extends unknown>(...paramelements: T[]): T[];
    static cycle<T extends unknown>(paramiterable: T[]): T[];
    static elementsEqual(paramiterable1: Object[], paramiterable2: Object[]): boolean;
    static filter<T extends unknown>(paramunfiltered: Object[], paramdesiredType: Class<T>): T[];
    static filter<T extends unknown>(paramunfiltered: T[], paramretainIfTrue: (param0: Object) => boolean): T[];
    static find<T extends unknown>(paramiterable: T[], parampredicate: (param0: Object) => boolean, paramdefaultValue: T): T;
    static find<T extends unknown>(paramiterable: T[], parampredicate: (param0: Object) => boolean): T;
    static frequency(paramiterable: Object[], paramelement: Object): number;
    static get<T extends unknown>(paramiterable: T[], paramposition: number, paramdefaultValue: T): T;
    static get<T extends unknown>(paramiterable: T[], paramposition: number): T;
    static getFirst<T extends unknown>(paramiterable: T[], paramdefaultValue: T): T;
    static getLast<T extends unknown>(paramiterable: T[], paramdefaultValue: T): T;
    static getLast<T extends unknown>(paramiterable: T[]): T;
    static getOnlyElement<T extends unknown>(paramiterable: T[], paramdefaultValue: T): T;
    static getOnlyElement<T extends unknown>(paramiterable: T[]): T;
    static indexOf<T extends unknown>(paramiterable: T[], parampredicate: (param0: Object) => boolean): number;
    static isEmpty(paramiterable: Object[]): boolean;
    static limit<T extends unknown>(paramiterable: T[], paramlimitSize: number): T[];
    static mergeSorted<T extends unknown>(paramiterables: T[][], paramcomparator: (param0: Object, param1: Object) => number): T[];
    static paddedPartition<T extends unknown>(paramiterable: T[], paramsize: number): T[][];
    static partition<T extends unknown>(paramiterable: T[], paramsize: number): T[][];
    static removeAll(paramremoveFrom: Object[], paramelementsToRemove: Object[]): boolean;
    static removeIf<T extends unknown>(paramremoveFrom: T[], parampredicate: (param0: Object) => boolean): boolean;
    static retainAll(paramremoveFrom: Object[], paramelementsToRetain: Object[]): boolean;
    static size(paramiterable: Object[]): number;
    static skip<T extends unknown>(paramiterable: T[], paramnumberToSkip: number): T[];
    static toArray<T extends unknown>(paramiterable: T[], paramtype: Class<T>): T[];
    static toString(paramiterable: Object[]): string;
    static transform<F extends unknown, T extends unknown>(paramfromIterable: F[], paramfunction: (param0: Object) => T): T[];
    static tryFind<T extends unknown>(paramiterable: T[], parampredicate: (param0: Object) => boolean): Optional<T>;
    static unmodifiableIterable<E extends unknown>(paramiterable: E[]): E[];
    static unmodifiableIterable<T extends unknown>(paramiterable: T[]): T[];
    private constructor()
}