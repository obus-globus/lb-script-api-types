import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { FieldInsnNode } from '../../../../../org/objectweb/asm/tree/FieldInsnNode.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { InvokeDynamicInsnNode } from '../../../../../org/objectweb/asm/tree/InvokeDynamicInsnNode.d.ts'
import type { MethodInsnNode } from '../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { MemberRef } from '../../../../../org/spongepowered/asm/mixin/struct/MemberRef.d.ts'
import type { ActivityStack } from '../../../../../org/spongepowered/asm/mixin/transformer/ActivityStack.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Method } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MixinInfo$MixinClassNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinClassNode.d.ts'
import type { MixinInfo$MixinMethodNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinMethodNode.d.ts'
import type { MixinPreProcessorStandard$SpecialMethod } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinPreProcessorStandard$SpecialMethod.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { TargetClassContext } from '../../../../../org/spongepowered/asm/mixin/transformer/TargetClassContext.d.ts'
import type { Extensions } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/Extensions.d.ts'
import type { Profiler } from '../../../../../org/spongepowered/asm/util/perf/Profiler.d.ts'
export class MixinPreProcessorStandard extends Object {
    constructor(arg0: MixinInfo, arg1: MixinInfo$MixinClassNode)
    // private activities: ActivityStack;
    // private attached: boolean;
    // private classNode: MixinInfo$MixinClassNode;
    // private env: MixinEnvironment;
    // private mixin: MixinInfo;
    // private prepared: boolean;
    // private profiler: Profiler;
    // private strictUnique: boolean;
    // private verboseLogging: boolean;
    attach(arg0: MixinTargetContext): MixinPreProcessorStandard;
    attachAccessorMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): boolean;
    attachAccessorMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode, arg2: MixinPreProcessorStandard$SpecialMethod): boolean;
    attachFields(arg0: MixinTargetContext): void;
    attachInjectorMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): boolean;
    attachMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): void;
    attachMethods(arg0: MixinTargetContext): void;
    attachOverwriteMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): boolean;
    attachShadowMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): boolean;
    attachSpecialMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode, arg2: MixinPreProcessorStandard$SpecialMethod): boolean;
    attachUniqueMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): boolean;
    checkMethodNotUnique(arg0: ClassInfo$Method, arg1: MixinPreProcessorStandard$SpecialMethod): void;
    checkMixinNotUnique(arg0: MixinInfo$MixinMethodNode, arg1: MixinPreProcessorStandard$SpecialMethod): void;
    conform(arg0: ClassInfo): MixinPreProcessorStandard;
    conform(arg0: TargetClassContext): MixinPreProcessorStandard;
    // private conformInjector(arg0: ClassInfo, arg1: MixinInfo$MixinMethodNode, arg2: ClassInfo$Method): void;
    // private conformVisibility(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode, arg2: MixinPreProcessorStandard$SpecialMethod, arg3: MethodNode): void;
    createContextFor(arg0: TargetClassContext): MixinTargetContext;
    getSpecialMethod(arg0: MixinInfo$MixinMethodNode, arg1: MixinPreProcessorStandard$SpecialMethod): ClassInfo$Method;
    prepare(arg0: Extensions): MixinPreProcessorStandard;
    prepareField(arg0: FieldNode): void;
    prepareInnerClasses(arg0: Extensions): void;
    prepareMethod(arg0: MixinInfo$MixinMethodNode, arg1: ClassInfo$Method): void;
    prepareShadow(arg0: MixinInfo$MixinMethodNode, arg1: ClassInfo$Method): void;
    prepareSoftImplements(arg0: MixinInfo$MixinMethodNode, arg1: ClassInfo$Method): void;
    transform(arg0: MixinTargetContext): void;
    transformField(arg0: FieldInsnNode): void;
    transformInvokeDynamic(arg0: InvokeDynamicInsnNode): void;
    transformMemberReference(arg0: MemberRef): void;
    transformMethod(arg0: MethodInsnNode): void;
    validateField(arg0: MixinTargetContext, arg1: FieldNode, arg2: AnnotationNode): boolean;
    validateMethod(arg0: MixinTargetContext, arg1: MixinInfo$MixinMethodNode): boolean;
}