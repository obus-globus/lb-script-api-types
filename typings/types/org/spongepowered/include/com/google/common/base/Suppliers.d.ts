import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Supplier } from '../../../../../../../org/spongepowered/include/com/google/common/base/Supplier.d.ts'
export class Suppliers extends Object {
    static memoize<T extends unknown>(paramarg0: () => T): () => T;
}