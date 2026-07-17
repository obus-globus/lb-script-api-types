import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { ErrorTypeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorTypeKind.d.ts'
export class ErrorType extends SimpleType {
    constructor(arg0: TypeConstructor, arg1: MemberScope, arg2: ErrorTypeKind, arg3: TypeProjection[], arg4: boolean, ...arg5: string[])
    readonly arguments: TypeProjection[];
    // inaccessible (TS-reserved member name): readonly constructor: TypeConstructor;
    readonly debugMessage: string;
    // private formatParams: string[];
    // private isMarkedNullable: boolean;
    readonly kind: ErrorTypeKind;
    readonly memberScope: MemberScope;
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<any>[];
    getConstructor(): TypeConstructor;
    getDebugMessage(): string;
    getKind(): ErrorTypeKind;
    getMemberScope(): MemberScope;
    isMarkedNullable(): boolean;
    makeNullableAsSpecified(arg0: boolean): SimpleType;
    refine(arg0: KotlinTypeRefiner): ErrorType;
    replaceArguments(arg0: TypeProjection[]): ErrorType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
}