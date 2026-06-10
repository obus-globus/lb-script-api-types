import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { MemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/MemberDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { OverridingStrategy } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingStrategy.d.ts'
import type { OverridingUtil$OverrideCompatibilityInfo } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil$OverrideCompatibilityInfo.d.ts'
import type { OverridingUtil$OverrideCompatibilityInfo$Result } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil$OverrideCompatibilityInfo$Result.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeCheckerState } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { KotlinTypeChecker$TypeConstructorEquality } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeChecker$TypeConstructorEquality.d.ts'
import type { KotlinTypePreparator } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypePreparator.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class OverridingUtil extends Object {
    static DEFAULT: OverridingUtil;
    static create(paramarg0: KotlinTypeRefiner, paramarg1: KotlinTypeChecker$TypeConstructorEquality): OverridingUtil;
    static createWithTypeRefiner(paramarg0: KotlinTypeRefiner): OverridingUtil;
    static extractMembersOverridableInBothWays(paramarg0: Object | null, paramarg1: (Object | null)[], paramarg2: (param0: Object | null) => CallableDescriptor, paramarg3: (param0: Object | null) => void): (Object | null)[];
    static filterOutOverridden(paramarg0: (CallableDescriptor | null)[]): (CallableDescriptor | null)[];
    static filterOverrides(paramarg0: (Object | null)[], paramarg1: boolean, paramarg2: () => Object, paramarg3: (param0: Object, param1: Object) => Pair<CallableDescriptor, CallableDescriptor>): (Object | null)[];
    static filterVisibleFakeOverrides(paramarg0: ClassDescriptor, paramarg1: CallableMemberDescriptor[]): CallableMemberDescriptor[];
    static findMaxVisibility(paramarg0: CallableMemberDescriptor[]): DescriptorVisibility;
    static getBasicOverridabilityProblem(paramarg0: CallableDescriptor, paramarg1: CallableDescriptor): OverridingUtil$OverrideCompatibilityInfo;
    static getBothWaysOverridability(paramarg0: CallableDescriptor, paramarg1: CallableDescriptor): OverridingUtil$OverrideCompatibilityInfo$Result;
    static getOverriddenDeclarations(paramarg0: CallableMemberDescriptor): CallableMemberDescriptor[];
    static isMoreSpecific(paramarg0: CallableDescriptor, paramarg1: CallableDescriptor): boolean;
    static isVisibleForOverride(paramarg0: MemberDescriptor, paramarg1: MemberDescriptor, paramarg2: boolean): boolean;
    static overrides(paramarg0: CallableDescriptor | null, paramarg1: CallableDescriptor | null, paramarg2: boolean, paramarg3: boolean): boolean;
    static resolveUnknownVisibilityForMember(paramarg0: CallableMemberDescriptor, paramarg1: (param0: CallableMemberDescriptor) => void): void;
    static selectMostSpecificMember(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => CallableDescriptor): Object | null;
    private constructor(arg0: KotlinTypeChecker$TypeConstructorEquality, arg1: KotlinTypeRefiner, arg2: KotlinTypePreparator, arg3: (param0: KotlinType, param1: KotlinType) => boolean)
    // private customSubtype: (param0: KotlinType, param1: KotlinType) => boolean;
    // private equalityAxioms: KotlinTypeChecker$TypeConstructorEquality;
    // private kotlinTypePreparator: KotlinTypePreparator;
    // private kotlinTypeRefiner: KotlinTypeRefiner;
    // private createTypeCheckerState(arg0: TypeParameterDescriptor[], arg1: TypeParameterDescriptor[]): TypeCheckerState;
    // private extractAndBindOverridesForMember(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor[], arg2: ClassDescriptor, arg3: OverridingStrategy): CallableMemberDescriptor[];
    generateOverridesInFunctionGroup(arg0: Name, arg1: CallableMemberDescriptor[], arg2: CallableMemberDescriptor[], arg3: ClassDescriptor, arg4: OverridingStrategy): void;
    isOverridableBy(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: ClassDescriptor): OverridingUtil$OverrideCompatibilityInfo;
    isOverridableBy(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: ClassDescriptor, arg3: boolean): OverridingUtil$OverrideCompatibilityInfo;
    isOverridableByWithoutExternalConditions(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: boolean): OverridingUtil$OverrideCompatibilityInfo;
}