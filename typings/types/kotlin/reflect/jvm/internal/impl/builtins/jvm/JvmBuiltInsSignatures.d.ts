import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FqNameUnsafe } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
export class JvmBuiltInsSignatures extends Object {
    static INSTANCE: JvmBuiltInsSignatures;
    private constructor()
    // private buildPrimitiveStringConstructorsSet(): string[];
    // private buildPrimitiveValueMethodsSet(): string[];
    getDEPRECATED_LIST_METHODS(): string[];
    getDROP_LIST_METHOD_SIGNATURES(): string[];
    getHIDDEN_CONSTRUCTOR_SIGNATURES(): string[];
    getHIDDEN_METHOD_SIGNATURES(): string[];
    getMUTABLE_METHOD_SIGNATURES(): string[];
    getVISIBLE_CONSTRUCTOR_SIGNATURES(): string[];
    getVISIBLE_METHOD_SIGNATURES(): string[];
    isArrayOrPrimitiveArray(arg0: FqNameUnsafe): boolean;
    isSerializableInJava(arg0: FqNameUnsafe): boolean;
}