import type { ImmutableMultiset$Builder } from '../../../../com/google/common/collect/ImmutableMultiset$Builder.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class RegularImmutableMultiset<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<E extends unknown>(): ImmutableMultiset$Builder<E>;
    static copyOf<E extends unknown>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: Iterator<E>): E[];
    static of<E extends unknown>(): E[];
    static of<E extends unknown>(parame1: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, ...paramothers: E[]): E[];
    static toImmutableMultiset<E extends unknown>(): Collector<E, Object, E[]>;
    static toImmutableMultiset<T extends unknown, E extends unknown>(paramelementFunction: (param0: Object) => E, paramcountFunction: (param0: Object) => number): Collector<T, Object, E[]>;
}