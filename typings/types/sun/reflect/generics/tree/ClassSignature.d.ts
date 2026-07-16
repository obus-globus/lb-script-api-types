import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassTypeSignature } from '../../../../sun/reflect/generics/tree/ClassTypeSignature.d.ts'
import type { FormalTypeParameter } from '../../../../sun/reflect/generics/tree/FormalTypeParameter.d.ts'
import type { Signature } from '../../../../sun/reflect/generics/tree/Signature.d.ts'
import type { Visitor } from '../../../../sun/reflect/generics/visitor/Visitor.d.ts'
export class ClassSignature extends Object implements Signature {
    static make(paramarg0: FormalTypeParameter[], paramarg1: ClassTypeSignature, paramarg2: ClassTypeSignature[]): ClassSignature;
    private constructor(arg0: FormalTypeParameter[], arg1: ClassTypeSignature, arg2: ClassTypeSignature[])
    // private formalTypeParams: FormalTypeParameter[];
    readonly superInterfaces: ClassTypeSignature[];
    readonly superclass: ClassTypeSignature;
    accept(arg0: Visitor<Object>): void;
    getFormalTypeParameters(): FormalTypeParameter[];
    getSuperInterfaces(): ClassTypeSignature[];
    getSuperclass(): ClassTypeSignature;
}