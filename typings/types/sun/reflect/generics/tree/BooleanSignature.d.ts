import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseType } from '../../../../sun/reflect/generics/tree/BaseType.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class BooleanSignature extends Object implements BaseType {
    static make(): BooleanSignature;
    private constructor()
    accept(arg0: TypeTreeVisitor<Object>): void;
}