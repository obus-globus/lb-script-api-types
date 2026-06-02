import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { TypeSystemCommonBackendContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSystemCommonBackendContext.d.ts'
import type { CapturedTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
import type { FlexibleTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/FlexibleTypeMarker.d.ts'
import type { KotlinTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeArgumentMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeSystemInferenceExtensionContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemInferenceExtensionContext.d.ts'
export interface ClassicTypeSystemContext extends Object, TypeSystemCommonBackendContext, TypeSystemInferenceExtensionContext{
    asCapturedType(arg0: SimpleTypeMarker): CapturedTypeMarker;
    asRigidType(arg0: KotlinTypeMarker): SimpleTypeMarker;
    createFlexibleType(arg0: RigidTypeMarker, arg1: RigidTypeMarker): KotlinTypeMarker;
    getBuiltIns(): KotlinBuiltIns;
    isSingleClassifierType(arg0: RigidTypeMarker): boolean;
    isStarProjection(arg0: TypeArgumentMarker): boolean;
    lowerBound(arg0: FlexibleTypeMarker): SimpleTypeMarker;
    typeConstructor(arg0: RigidTypeMarker): TypeConstructorMarker;
    upperBound(arg0: FlexibleTypeMarker): SimpleTypeMarker;
    withNullability(arg0: RigidTypeMarker, arg1: boolean): SimpleTypeMarker;
}