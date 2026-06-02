import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class BottomSignature extends Object implements FieldTypeSignature {
    static make(): BottomSignature;
    private constructor()
    accept(arg0: TypeTreeVisitor<Object>): void;
}