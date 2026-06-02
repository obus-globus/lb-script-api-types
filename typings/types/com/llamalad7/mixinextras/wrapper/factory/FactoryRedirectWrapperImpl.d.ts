import type { InjectorWrapperImpl } from '../../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl.d.ts'
import type { InjectorWrapperImpl$HandlerCallCallback } from '../../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl$HandlerCallCallback.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodInsnNode } from '../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export class FactoryRedirectWrapperImpl extends InjectorWrapperImpl {
    constructor(arg0: InjectionInfo, arg1: MixinTargetContext, arg2: MethodNode, arg3: AnnotationNode)
    // private delegate: InjectionInfo;
    // private handler: MethodNode;
    // private findReplacedNodes(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: (param0: InjectionNodes$InjectionNode) => void): void;
    getDelegate(): InjectionInfo;
    getHandler(): MethodNode;
    granularInject(arg0: (param0: AbstractInsnNode[], param1: InjectionNodes$InjectionNode, param2: MethodInsnNode) => void): void;
}