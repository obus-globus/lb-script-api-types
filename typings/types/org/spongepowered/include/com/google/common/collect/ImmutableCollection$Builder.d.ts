import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ImmutableCollection$Builder<E extends unknown> extends Object {
    constructor()
    add(arg0: E): ImmutableCollection$Builder<E>;
    add(arg0: E[]): ImmutableCollection$Builder<E>;
    addAll(arg0: E[]): ImmutableCollection$Builder<E>;
}