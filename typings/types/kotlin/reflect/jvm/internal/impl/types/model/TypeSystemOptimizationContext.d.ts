import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RigidTypeMarker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
export interface TypeSystemOptimizationContext extends Object{
    identicalArguments(arg0: RigidTypeMarker, arg1: RigidTypeMarker): boolean;
}