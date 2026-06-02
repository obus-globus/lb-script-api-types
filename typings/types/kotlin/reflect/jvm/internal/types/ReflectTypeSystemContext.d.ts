import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState$SupertypesPolicy } from '../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState$SupertypesPolicy.d.ts'
import type { CaptureStatus } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/CaptureStatus.d.ts'
import type { KotlinTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeSubstitutorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSubstitutorMarker.d.ts'
import type { TypeSystemContext } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
export class ReflectTypeSystemContext extends Object implements TypeSystemContext {
    static INSTANCE: ReflectTypeSystemContext;
    areEqualTypeConstructors(c1: TypeConstructorMarker, c2: TypeConstructorMarker): boolean;
    captureFromArguments(type: RigidTypeMarker, status: CaptureStatus): RigidTypeMarker | null;
    captureFromExpression(type: KotlinTypeMarker): KotlinTypeMarker | null;
    createEmptySubstitutor(): TypeSubstitutorMarker;
    intersectTypes(types: E[]): KotlinTypeMarker;
    intersectTypes(types: E[]): SimpleTypeMarker;
    substitutionSupertypePolicy(type: RigidTypeMarker): TypeCheckerState$SupertypesPolicy;
    typeSubstitutorByTypeConstructor(map: Map<TypeConstructorMarker, KotlinTypeMarker>): TypeSubstitutorMarker;
}