import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { SimpleClassTypeSignature } from '../../../../sun/reflect/generics/tree/SimpleClassTypeSignature.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class ClassTypeSignature extends Object implements FieldTypeSignature {
    static make(paramarg0: SimpleClassTypeSignature[]): ClassTypeSignature;
    private constructor(arg0: SimpleClassTypeSignature[])
    readonly path: SimpleClassTypeSignature[];
    accept(arg0: TypeTreeVisitor<Object>): void;
    getPath(): SimpleClassTypeSignature[];
}