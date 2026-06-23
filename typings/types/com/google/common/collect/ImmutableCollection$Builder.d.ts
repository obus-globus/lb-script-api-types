import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class ImmutableCollection$Builder<E extends unknown> extends Object {
    constructor()
    add(element: E): ImmutableCollection$Builder<E>;
    add(elements: E[]): ImmutableCollection$Builder<E>;
    addAll(elements: E[]): ImmutableCollection$Builder<E>;
    addAll(elements: Iterator<E>): ImmutableCollection$Builder<E>;
    build(): E[];
}