import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
export interface JvmTypeFactory<T extends Object | number | string | boolean> extends Object{
    boxType(arg0: T): T;
    createFromString(arg0: string): T;
    createObjectType(arg0: string): T;
    createPrimitiveType(arg0: PrimitiveType): T;
    getJavaLangClassType(): T;
    toString(arg0: T): string;
}