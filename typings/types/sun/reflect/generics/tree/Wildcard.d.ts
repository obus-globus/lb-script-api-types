import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { TypeArgument } from '../../../../sun/reflect/generics/tree/TypeArgument.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class Wildcard extends Object implements TypeArgument {
    static make(paramarg0: FieldTypeSignature[], paramarg1: FieldTypeSignature[]): Wildcard;
    private constructor(arg0: FieldTypeSignature[], arg1: FieldTypeSignature[])
    readonly lowerBounds: FieldTypeSignature[];
    readonly upperBounds: FieldTypeSignature[];
    accept(arg0: TypeTreeVisitor<Object>): void;
    getLowerBounds(): FieldTypeSignature[];
    getUpperBounds(): FieldTypeSignature[];
}