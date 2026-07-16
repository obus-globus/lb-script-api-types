import type { ImmutableList$Builder } from '../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableAsList<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<E extends unknown>(): ImmutableList$Builder<E>;
    static builderWithExpectedSize<E extends unknown>(paramexpectedSize: number): ImmutableList$Builder<E>;
    static copyOf<E extends unknown>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: Iterator<E>): E[];
    static of<E extends unknown>(): E[];
    static of<E extends unknown>(parame1: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, parame7: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, parame7: E, parame8: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, parame7: E, parame8: E, parame9: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, parame7: E, parame8: E, parame9: E, parame10: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, parame7: E, parame8: E, parame9: E, parame10: E, parame11: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, parame7: E, parame8: E, parame9: E, parame10: E, parame11: E, parame12: E, ...paramothers: E[]): E[];
    static sortedCopyOf<E extends Comparable<Object>>(paramelements: E[]): E[];
    static sortedCopyOf<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number, paramelements: E[]): E[];
    static toImmutableList<E extends unknown>(): Collector<E, Object, E[]>;
}