import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { IActivityContext$IActivity } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext$IActivity.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { EnumInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/EnumInfo.d.ts'
import type { MixinApplicatorStandard } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinApplicatorStandard.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
import type { Clinit } from '../../../../../org/spongepowered/asm/mixin/transformer/struct/Clinit.d.ts'
export class MixinApplicatorEnum extends MixinApplicatorStandard {
    constructor(arg0: TargetClassContext)
    // private extensionInfos: Map<IMixinInfo, EnumInfo>;
    // private insertionPoint: FieldNode;
    // private ordinalShift: number;
    // private targetInfo: EnumInfo;
    // private applyEnumFields(arg0: EnumInfo, arg1: MixinTargetContext): void;
    applyFields(arg0: MixinTargetContext): void;
    applyNormalMethod(arg0: MixinTargetContext, arg1: MethodNode): void;
    // private checkUniqueEnumConstants(arg0: MixinTargetContext[]): void;
    // private gatherEnumExtensions(arg0: MixinTargetContext[]): void;
    mergeNormalField(arg0: MixinTargetContext, arg1: FieldNode, arg2: number): void;
    // private permitEnumSubclasses(arg0: MixinTargetContext[]): void;
    preApply(arg0: IActivityContext$IActivity, arg1: MixinTargetContext[]): void;
    prepareOrCreateClinit(): Clinit;
    // private prepareTargetInfo(arg0: MixinTargetContext[]): void;
    // private replaceValueOf(): void;
    // private sortEnumExtensions(arg0: MixinTargetContext[]): void;
}