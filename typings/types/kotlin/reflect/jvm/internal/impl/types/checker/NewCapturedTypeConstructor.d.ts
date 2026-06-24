import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { CapturedTypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/calls/inference/CapturedTypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { UnwrappedType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class NewCapturedTypeConstructor extends Object implements CapturedTypeConstructor {
    constructor(arg0: TypeProjection, arg1: () => UnwrappedType[], arg2: NewCapturedTypeConstructor, arg3: TypeParameterDescriptor)
    constructor(arg0: TypeProjection, arg1: () => Object | null, arg2: NewCapturedTypeConstructor, arg3: TypeParameterDescriptor, arg4: number, arg5: DefaultConstructorMarker)
    constructor(arg0: TypeProjection, arg1: UnwrappedType[], arg2: NewCapturedTypeConstructor)
    constructor(arg0: TypeProjection, arg1: (Object | null)[], arg2: NewCapturedTypeConstructor, arg3: number, arg4: DefaultConstructorMarker)
    // private _supertypes$delegate: Lazy<Object>;
    // private original: NewCapturedTypeConstructor;
    readonly projection: TypeProjection;
    // private supertypesComputation: () => UnwrappedType[];
    // private typeParameter: TypeParameterDescriptor;
    equals(arg0: Object | null): boolean;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getProjection(): TypeProjection;
    getSupertypes(): UnwrappedType[];
    // private get_supertypes(): UnwrappedType[];
    hashCode(): number;
    initializeSupertypes(arg0: UnwrappedType[]): void;
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): NewCapturedTypeConstructor;
    toString(): string;
}