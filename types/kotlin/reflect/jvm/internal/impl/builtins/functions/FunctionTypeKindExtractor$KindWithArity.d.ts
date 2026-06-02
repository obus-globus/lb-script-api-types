import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunctionTypeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKind.d.ts'
export class FunctionTypeKindExtractor$KindWithArity extends Object {
    constructor(arg0: FunctionTypeKind, arg1: number)
    // private arity: number;
    readonly kind: FunctionTypeKind;
    component1(): FunctionTypeKind;
    component2(): number;
    equals(arg0: Object | null): boolean;
    getKind(): FunctionTypeKind;
    hashCode(): number;
    toString(): string;
}