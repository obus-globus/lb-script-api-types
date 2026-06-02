import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Settings } from '../../../../net/minecraft/server/dedicated/Settings.d.ts'
export class Settings$MutableValue<V extends Object | number | string | boolean> extends Object implements Supplier<V> {
    private constructor(null_: Settings$MutableValue<Object>, value: V, serializer: (param0: V) => string)
    // private key: string;
    // private serializer: (param0: V) => string;
    // private value: V;
    get(): V;
    update<T extends Settings<T>>(registryAccess: RegistryAccess, value: V): T;
}