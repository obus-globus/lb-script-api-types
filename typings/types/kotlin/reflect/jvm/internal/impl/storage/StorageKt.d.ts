import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../../../kotlin/reflect/KProperty.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
export class StorageKt extends Object {
    static getValue<T extends unknown>(paramarg0: NotNullLazyValue<T>, paramarg1: Object, paramarg2: KProperty<Object>): T;
    static getValue<T extends unknown>(paramarg0: NullableLazyValue<T>, paramarg1: Object, paramarg2: KProperty<Object>): T;
}