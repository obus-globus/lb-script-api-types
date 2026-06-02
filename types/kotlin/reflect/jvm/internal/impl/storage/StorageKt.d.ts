import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KProperty } from '../../../../../../kotlin/reflect/KProperty.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
export class StorageKt extends Object {
    static getValue(paramarg0: NotNullLazyValue<Object>, paramarg1: Object, paramarg2: KProperty<Object>): Object | null;
    static getValue(paramarg0: NullableLazyValue<Object>, paramarg1: Object, paramarg2: KProperty<Object>): Object | null;
}