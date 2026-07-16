import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { FormalTypeParameter } from '../../../../sun/reflect/generics/tree/FormalTypeParameter.d.ts'
import type { ReturnType } from '../../../../sun/reflect/generics/tree/ReturnType.d.ts'
import type { Signature } from '../../../../sun/reflect/generics/tree/Signature.d.ts'
import type { TypeSignature } from '../../../../sun/reflect/generics/tree/TypeSignature.d.ts'
import type { Visitor } from '../../../../sun/reflect/generics/visitor/Visitor.d.ts'
export class MethodTypeSignature extends Object implements Signature {
    static make(paramarg0: FormalTypeParameter[], paramarg1: TypeSignature[], paramarg2: ReturnType, paramarg3: FieldTypeSignature[]): MethodTypeSignature;
    private constructor(arg0: FormalTypeParameter[], arg1: TypeSignature[], arg2: ReturnType, arg3: FieldTypeSignature[])
    readonly exceptionTypes: FieldTypeSignature[];
    // private formalTypeParams: FormalTypeParameter[];
    readonly parameterTypes: TypeSignature[];
    readonly returnType: ReturnType;
    accept(arg0: Visitor<Object>): void;
    getExceptionTypes(): FieldTypeSignature[];
    getFormalTypeParameters(): FormalTypeParameter[];
    getParameterTypes(): TypeSignature[];
    getReturnType(): ReturnType;
}