import type { CapturedTypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/calls/inference/CapturedTypeConstructor.d.ts'
import type { MemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeProjection } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { CapturedTypeMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
export class CapturedType extends SimpleType implements CapturedTypeMarker {
    constructor(arg0: TypeProjection, arg1: CapturedTypeConstructor, arg2: boolean, arg3: TypeAttribute<any>[])
    readonly attributes: TypeAttribute<any>[];
    // inaccessible (TS-reserved member name): readonly constructor: CapturedTypeConstructor;
    // private isMarkedNullable: boolean;
    // private typeProjection: TypeProjection;
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<any>[];
    getConstructor(): CapturedTypeConstructor;
    getMemberScope(): MemberScope;
    isMarkedNullable(): boolean;
    makeNullableAsSpecified(arg0: boolean): CapturedType;
    refine(arg0: KotlinTypeRefiner): CapturedType;
    replaceAttributes(arg0: TypeAttribute<any>[]): SimpleType;
    toString(): string;
}