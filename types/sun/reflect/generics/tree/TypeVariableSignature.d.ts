import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class TypeVariableSignature extends Object implements FieldTypeSignature {
    static make(paramarg0: string): TypeVariableSignature;
    private constructor(arg0: string)
    readonly identifier: string;
    accept(arg0: TypeTreeVisitor<Object>): void;
    getIdentifier(): string;
}