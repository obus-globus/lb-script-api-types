import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableSet$Builder } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableSet$Builder.d.ts'
export class ImmutableSet<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<E extends unknown>(): ImmutableSet$Builder<E>;
    static copyOf<E extends unknown>(paramarg0: E[]): E[];
    static of<E extends unknown>(): E[];
    static of<E extends unknown>(paramarg0: E): E[];
    static of<E extends unknown>(paramarg0: E, paramarg1: E): E[];
    static of<E extends unknown>(paramarg0: E, paramarg1: E, paramarg2: E, paramarg3: E): E[];
    static of<E extends unknown>(paramarg0: E, paramarg1: E, paramarg2: E, paramarg3: E, paramarg4: E, paramarg5: E, ...paramarg6: E[]): E[];
}