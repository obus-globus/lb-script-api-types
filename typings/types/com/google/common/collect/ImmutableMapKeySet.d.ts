import type { ImmutableSet$Builder } from '../../../../com/google/common/collect/ImmutableSet$Builder.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ImmutableMapKeySet<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<E extends unknown>(): ImmutableSet$Builder<E>;
    static builderWithExpectedSize<E extends unknown>(paramexpectedSize: number): ImmutableSet$Builder<E>;
    static copyOf<E extends unknown>(paramelements: E[]): E[];
    static copyOf<E extends unknown>(paramelements: Iterator<E>): E[];
    static of<E extends unknown>(): E[];
    static of<E extends unknown>(parame1: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E): E[];
    static of<E extends unknown>(parame1: E, parame2: E, parame3: E, parame4: E, parame5: E, parame6: E, ...paramothers: E[]): E[];
    static toImmutableSet<E extends unknown>(): Collector<E, Object, E[]>;
}