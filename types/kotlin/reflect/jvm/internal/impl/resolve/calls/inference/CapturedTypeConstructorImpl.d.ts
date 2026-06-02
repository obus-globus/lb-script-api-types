import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { CapturedTypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/calls/inference/CapturedTypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { NewCapturedTypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewCapturedTypeConstructor.d.ts'
export class CapturedTypeConstructorImpl extends Object implements CapturedTypeConstructor {
    constructor(arg0: TypeProjection)
    readonly newTypeConstructor: NewCapturedTypeConstructor;
    readonly projection: TypeProjection;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): void;
    getNewTypeConstructor(): NewCapturedTypeConstructor;
    getParameters(): TypeParameterDescriptor[];
    getProjection(): TypeProjection;
    getSupertypes(): E[];
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): CapturedTypeConstructorImpl;
    setNewTypeConstructor(arg0: NewCapturedTypeConstructor): void;
    toString(): string;
}