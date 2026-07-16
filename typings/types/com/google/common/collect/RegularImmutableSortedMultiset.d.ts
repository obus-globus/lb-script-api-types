import type { ImmutableMultiset$Builder } from '../../../../com/google/common/collect/ImmutableMultiset$Builder.d.ts'
import type { ImmutableSortedMultiset$Builder } from '../../../../com/google/common/collect/ImmutableSortedMultiset$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class RegularImmutableSortedMultiset<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<E extends unknown>(): ImmutableMultiset$Builder<E>;
    static builder<E extends unknown>(): ImmutableSortedMultiset$Builder<E>;
    static copyOf<E extends Comparable<Object>>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: Iterator<E>): E[];
    static copyOf<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number, paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number, paramelements: Iterator<E>): E[];
    static copyOf<Z extends unknown>(paramelements: Z[]): Z[];
    static copyOfSorted<E extends unknown>(paramsortedMultiset: E[]): E[];
    static naturalOrder<E extends Comparable<Object>>(): ImmutableSortedMultiset$Builder<E>;
    static of<E extends Comparable<Object>>(parame1: E): E[];
    static of<E extends Comparable<Object>>(parame1: E, parame2: E): E[];
    static of<E extends Comparable<Object>>(parame1: E, parame2: E, parame3: E): E[];
    static of<E extends Comparable<Object>>(parame1: E, parame2: E, parame3: E, parame4: E): E[];
    static of<E extends Comparable<Object>>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E): E[];
    static of<E extends Comparable<Object>>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, ...paramremaining: E[]): E[];
    static of<E extends unknown>(): E[];
    static of<E extends unknown>(parame1: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, ...paramothers: E[]): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, ...paramremaining: E[]): E[];
    static orderedBy<E extends unknown>(paramcomparator: (param0: E, param1: E) => number): ImmutableSortedMultiset$Builder<E>;
    static reverseOrder<E extends Comparable<Object>>(): ImmutableSortedMultiset$Builder<E>;
    static toImmutableMultiset<E extends unknown>(): Collector<E, Object, E[]>;
    static toImmutableMultiset<T extends unknown, E extends unknown>(paramelementFunction: (param0: Object) => E, paramcountFunction: (param0: Object) => number): Collector<T, Object, E[]>;
    static toImmutableSortedMultiset<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number): Collector<E, Object, E[]>;
    static toImmutableSortedMultiset<T extends unknown, E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number, paramelementFunction: (param0: Object) => E, paramcountFunction: (param0: Object) => number): Collector<T, Object, E[]>;
}