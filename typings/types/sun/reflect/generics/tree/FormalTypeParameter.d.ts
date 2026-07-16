import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { TypeTree } from '../../../../sun/reflect/generics/tree/TypeTree.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class FormalTypeParameter extends Object implements TypeTree {
    static make(paramarg0: string, paramarg1: FieldTypeSignature[]): FormalTypeParameter;
    private constructor(arg0: string, arg1: FieldTypeSignature[])
    readonly bounds: FieldTypeSignature[];
    readonly name: string;
    accept(arg0: TypeTreeVisitor<Object>): void;
    getBounds(): FieldTypeSignature[];
    getName(): string;
}