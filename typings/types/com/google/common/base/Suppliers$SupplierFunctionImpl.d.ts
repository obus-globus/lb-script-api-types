import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Suppliers$SupplierFunction } from '../../../../com/google/common/base/Suppliers$SupplierFunction.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Suppliers$SupplierFunctionImpl extends Enum<Suppliers$SupplierFunctionImpl> implements Suppliers$SupplierFunction<Object> {
    static INSTANCE: Suppliers$SupplierFunctionImpl;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Suppliers$SupplierFunctionImpl;
    static values(): Suppliers$SupplierFunctionImpl[];
    private constructor()
    apply(input: () => Object): Object;
    toString(): string;
    name(): "INSTANCE";
}