import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MultimapBuilder$EnumSetSupplier<V extends Enum<V>> extends Object implements Supplier<V[]>, Serializable {
    constructor(clazz: Class<V>)
    // private clazz: Class<V>;
    get(): V[];
}