import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ReturnType } from '../../../../sun/reflect/generics/tree/ReturnType.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class VoidDescriptor extends Object implements ReturnType {
    static make(): VoidDescriptor;
    private constructor()
    accept(arg0: TypeTreeVisitor<Object>): void;
}