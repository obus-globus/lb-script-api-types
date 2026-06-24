import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractTypePreparator } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractTypePreparator.d.ts'
import type { AbstractTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractTypeRefiner.d.ts'
import type { TypeCheckerState$ForkPointContext } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState$ForkPointContext.d.ts'
import type { TypeCheckerState$LowerCapturedTypePolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState$LowerCapturedTypePolicy.d.ts'
import type { CapturedTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
import type { RigidTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/RigidTypeMarker.d.ts'
import type { TypeSystemContext } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
export class TypeCheckerState extends Object {
    constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: TypeSystemContext, arg5: AbstractTypePreparator, arg6: AbstractTypeRefiner)
    // private allowedTypeVariable: boolean;
    // private argumentsDepth: number;
    // private isDnnTypesEqualToFlexible: boolean;
    // private isErrorTypeEqualsToAnything: boolean;
    // private isStubTypeEqualsToAnything: boolean;
    readonly kotlinTypePreparator: AbstractTypePreparator;
    // private kotlinTypeRefiner: AbstractTypeRefiner;
    readonly supertypesDeque: RigidTypeMarker[];
    // private supertypesLocked: boolean;
    readonly supertypesSet: RigidTypeMarker[];
    readonly typeSystemContext: TypeSystemContext;
    addSubtypeConstraint(arg0: KotlinTypeMarker, arg1: KotlinTypeMarker, arg2: boolean): boolean;
    clear(): void;
    customIsSubtypeOf(arg0: KotlinTypeMarker, arg1: KotlinTypeMarker): boolean;
    getKotlinTypePreparator(): AbstractTypePreparator;
    getLowerCapturedTypePolicy(arg0: RigidTypeMarker, arg1: CapturedTypeMarker): TypeCheckerState$LowerCapturedTypePolicy;
    getSupertypesDeque(): RigidTypeMarker[];
    getSupertypesSet(): RigidTypeMarker[];
    getTypeSystemContext(): TypeSystemContext;
    initialize(): void;
    isAllowedTypeVariable(arg0: KotlinTypeMarker): boolean;
    isDnnTypesEqualToFlexible(): boolean;
    isErrorTypeEqualsToAnything(): boolean;
    isStubTypeEqualsToAnything(): boolean;
    prepareType(arg0: KotlinTypeMarker): KotlinTypeMarker;
    refineType(arg0: KotlinTypeMarker): KotlinTypeMarker;
    runForkingPoint(arg0: (param0: TypeCheckerState$ForkPointContext) => void): boolean;
}