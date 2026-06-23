import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultimapBuilder$ArrayListSupplier<V extends unknown> extends Object implements Supplier<V[]>, Serializable {
    constructor(expectedValuesPerKey: number)
    // private expectedValuesPerKey: number;
    get(): V[];
}