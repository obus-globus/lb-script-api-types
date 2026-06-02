import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseType } from '../../../../sun/reflect/generics/tree/BaseType.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class DoubleSignature extends Object implements BaseType {
    static make(): DoubleSignature;
    private constructor()
    accept(arg0: TypeTreeVisitor<Object>): void;
}