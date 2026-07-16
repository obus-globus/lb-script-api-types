import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { ImmutableSet$Builder } from '../../../../com/google/common/collect/ImmutableSet$Builder.d.ts'
import type { ImmutableSortedSet$Builder } from '../../../../com/google/common/collect/ImmutableSortedSet$Builder.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class RegularContiguousSet<C extends Comparable<Object>> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<E extends unknown>(): ImmutableSet$Builder<E>;
    static builder<E extends unknown>(): ImmutableSortedSet$Builder<E>;
    static builderWithExpectedSize<E extends unknown>(paramexpectedSize: number): ImmutableSet$Builder<E>;
    static builderWithExpectedSize<E extends unknown>(paramexpectedSize: number): ImmutableSortedSet$Builder<E>;
    static closed(paramlower: number, paramupper: number): number[];
    static closedOpen(paramlower: number, paramupper: number): number[];
    static copyOf<E extends Comparable<Object>>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: Iterator<E>): E[];
    static copyOf<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number, paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number, paramelements: Iterator<E>): E[];
    static copyOf<Z extends unknown>(paramelements: Z[]): Z[];
    static copyOfSorted<E extends unknown>(paramsortedSet: E[]): E[];
    static create<C extends Comparable<Object>>(paramrange: Range<C>, paramdomain: DiscreteDomain<C>): C[];
    static naturalOrder<E extends Comparable<Object>>(): ImmutableSortedSet$Builder<E>;
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
    static orderedBy<E extends unknown>(paramcomparator: (param0: E, param1: E) => number): ImmutableSortedSet$Builder<E>;
    static reverseOrder<E extends Comparable<Object>>(): ImmutableSortedSet$Builder<E>;
    static toImmutableSet<E extends unknown>(): Collector<E, Object, E[]>;
    static toImmutableSortedSet<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number): Collector<E, Object, E[]>;
}