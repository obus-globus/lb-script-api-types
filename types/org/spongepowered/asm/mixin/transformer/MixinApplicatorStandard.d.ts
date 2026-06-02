import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { ILogger } from '../../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { IActivityContext$IActivity } from '../../../../../org/spongepowered/asm/mixin/extensibility/IActivityContext$IActivity.d.ts'
import type { ActivityStack } from '../../../../../org/spongepowered/asm/mixin/transformer/ActivityStack.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinApplicatorStandard$ApplicatorPass } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinApplicatorStandard$ApplicatorPass.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
import type { Clinit } from '../../../../../org/spongepowered/asm/mixin/transformer/struct/Clinit.d.ts'
import type { IMixinAuditTrail } from '../../../../../org/spongepowered/asm/service/IMixinAuditTrail.d.ts'
import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class MixinApplicatorStandard extends Object {
    constructor(arg0: TargetClassContext)
    // private activities: ActivityStack;
    // private auditTrail: IMixinAuditTrail;
    // private context: TargetClassContext;
    // private logger: ILogger;
    // private mergeSignatures: boolean;
    // private profiler: Profiler;
    // private targetClass: ClassNode;
    // private targetClassInfo: ClassInfo;
    // private targetName: string;
    appendInsns(arg0: MixinTargetContext, arg1: MethodNode): void;
    apply(arg0: MixinInfo[]): void;
    applyAccessors(arg0: MixinTargetContext): void;
    applyAnnotations(arg0: MixinTargetContext): void;
    applyAttributes(arg0: MixinTargetContext): void;
    applyClinit(arg0: MixinTargetContext, arg1: () => Clinit): void;
    applyClinitLegacy(arg0: MixinTargetContext): void;
    applyFields(arg0: MixinTargetContext): void;
    applyInitialisers(arg0: MixinTargetContext): void;
    applyInjections(arg0: MixinTargetContext, arg1: number): void;
    applyInterfaces(arg0: MixinTargetContext): void;
    applyMethods(arg0: MixinTargetContext): void;
    applyNormalMethod(arg0: MixinTargetContext, arg1: MethodNode): void;
    applyPreInjections(arg0: MixinTargetContext): void;
    applyShadowMethod(arg0: MixinTargetContext, arg1: MethodNode): void;
    applySignature(arg0: MixinTargetContext): void;
    applySourceMap(arg0: TargetClassContext): void;
    checkConstraints(arg0: MixinTargetContext, arg1: MethodNode, arg2: AnnotationNode): void;
    checkMethodConstraints(arg0: MixinTargetContext, arg1: MethodNode): void;
    checkMethodVisibility(arg0: MixinTargetContext, arg1: MethodNode): void;
    displaceIntrinsic(arg0: MixinTargetContext, arg1: MethodNode, arg2: MethodNode): void;
    findTargetField(arg0: FieldNode): FieldNode;
    findTargetMethod(arg0: MethodNode): MethodNode;
    isAlreadyMerged(arg0: MixinTargetContext, arg1: MethodNode, arg2: boolean, arg3: MethodNode): boolean;
    mergeIntrinsic(arg0: MixinTargetContext, arg1: MethodNode, arg2: boolean, arg3: MethodNode, arg4: AnnotationNode): boolean;
    mergeMethod(arg0: MixinTargetContext, arg1: MethodNode): void;
    mergeNewFields(arg0: MixinTargetContext): void;
    mergeNormalField(arg0: MixinTargetContext, arg1: FieldNode, arg2: number): void;
    mergeShadowFields(arg0: MixinTargetContext): void;
    preApply(arg0: IActivityContext$IActivity, arg1: MixinTargetContext[]): void;
    prepareInjections(arg0: MixinTargetContext): void;
    prepareOrCreateClinit(): Clinit;
    // private processMixins(arg0: MixinTargetContext[], arg1: (param0: IActivityContext$IActivity, param1: MixinTargetContext) => void): void;
    // private runApplicatorPass(arg0: MixinApplicatorStandard$ApplicatorPass, arg1: MixinTargetContext[]): void;
}