import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionBinding } from '../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
export class AnonymousOptionBinding<V extends unknown> extends Object implements OptionBinding<V> {
    constructor(arg0: (param0: V) => void, arg1: () => V)
    // private load: () => V;
    // private save: (param0: V) => void;
    load(): V;
    save(arg0: V): void;
}