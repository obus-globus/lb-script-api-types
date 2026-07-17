import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Sets extends Object {
    static cartesianProduct<B extends unknown>(paramsets: B[][]): B[][];
    static cartesianProduct<B extends unknown>(...paramsets: B[][]): B[][];
    static combinations<E extends unknown>(paramset: E[], paramsize: number): E[][];
    static complementOf<E extends Enum<E>>(paramcollection: E[]): E[];
    static complementOf<E extends Enum<E>>(paramcollection: E[], paramtype: Class<E>): E[];
    static difference<E extends unknown>(paramset1: E[], paramset2: Object[]): E[];
    static filter<E extends unknown>(paramunfiltered: E[], parampredicate: (param0: Object) => boolean): E[];
    static immutableEnumSet<E extends Enum<E>>(paramanElement: E, ...paramotherElements: E[]): E[];
    static immutableEnumSet<E extends Enum<E>>(paramelements: E[]): E[];
    static intersection<E extends unknown>(paramset1: E[], paramset2: Object[]): E[];
    static newConcurrentHashSet<E extends unknown>(): E[];
    static newConcurrentHashSet<E extends unknown>(paramelements: E[]): E[];
    static newCopyOnWriteArraySet<E extends unknown>(): E[];
    static newCopyOnWriteArraySet<E extends unknown>(paramelements: E[]): E[];
    static newEnumSet<E extends Enum<E>>(paramiterable: E[], paramelementType: Class<E>): E[];
    static newHashSet<E extends unknown>(): E[];
    static newHashSet<E extends unknown>(...paramelements: E[]): E[];
    static newHashSet<E extends unknown>(paramelements: E[]): E[];
    static newHashSet<E extends unknown>(paramelements: Iterator<E>): E[];
    static newHashSetWithExpectedSize<E extends unknown>(paramexpectedSize: number): E[];
    static newIdentityHashSet<E extends unknown>(): E[];
    static newLinkedHashSet<E extends unknown>(): E[];
    static newLinkedHashSet<E extends unknown>(paramelements: E[]): E[];
    static newLinkedHashSetWithExpectedSize<E extends unknown>(paramexpectedSize: number): E[];
    static newSetFromMap<E extends unknown>(parammap: JavaMap<E, boolean>): E[];
    static newTreeSet<E extends Comparable<Object>>(): E[];
    static newTreeSet<E extends Comparable<Object>>(paramelements: E[]): E[];
    static newTreeSet<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number): E[];
    static powerSet<E extends unknown>(paramset: E[]): E[][];
    static subSet<K extends Comparable<Object>>(paramset: K[], paramrange: Range<K>): K[];
    static symmetricDifference<E extends unknown>(paramset1: E[], paramset2: E[]): E[];
    static synchronizedNavigableSet<E extends unknown>(paramnavigableSet: E[]): E[];
    static toImmutableEnumSet<E extends Enum<E>>(): Collector<E, Object, E[]>;
    static union<E extends unknown>(paramset1: E[], paramset2: E[]): E[];
    static unmodifiableNavigableSet<E extends unknown>(paramset: E[]): E[];
    private constructor()
}