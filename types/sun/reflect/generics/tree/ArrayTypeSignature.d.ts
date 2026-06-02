import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { TypeSignature } from '../../../../sun/reflect/generics/tree/TypeSignature.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class ArrayTypeSignature extends Object implements FieldTypeSignature {
    static make(paramarg0: TypeSignature): ArrayTypeSignature;
    private constructor(arg0: TypeSignature)
    readonly componentType: TypeSignature;
    accept(arg0: TypeTreeVisitor<Object>): void;
    getComponentType(): TypeSignature;
}