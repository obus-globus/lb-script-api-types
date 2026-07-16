import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldTypeSignature } from '../../../../sun/reflect/generics/tree/FieldTypeSignature.d.ts'
import type { TypeArgument } from '../../../../sun/reflect/generics/tree/TypeArgument.d.ts'
import type { TypeTreeVisitor } from '../../../../sun/reflect/generics/visitor/TypeTreeVisitor.d.ts'
export class SimpleClassTypeSignature extends Object implements FieldTypeSignature {
    static make(paramarg0: string, paramarg1: boolean, paramarg2: TypeArgument[]): SimpleClassTypeSignature;
    private constructor(arg0: string, arg1: boolean, arg2: TypeArgument[])
    readonly dollar: boolean;
    readonly name: string;
    // private typeArgs: TypeArgument[];
    accept(arg0: TypeTreeVisitor<Object>): void;
    getDollar(): boolean;
    getName(): string;
    getTypeArguments(): TypeArgument[];
}