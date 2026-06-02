import type { SugarInjector } from '../../../../../com/llamalad7/mixinextras/sugar/impl/SugarInjector.d.ts'
import type { InjectorWrapperImpl } from '../../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl.d.ts'
import type { InjectorWrapperImpl$HandlerCallCallback } from '../../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl$HandlerCallCallback.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodInsnNode } from '../../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export class SugarWrapperImpl extends InjectorWrapperImpl {
    constructor(arg0: InjectionInfo, arg1: MixinTargetContext, arg2: MethodNode, arg3: AnnotationNode)
    // private delegate: InjectionInfo;
    // private generics: Type[];
    // private handler: MethodNode;
    // private originalAnnotation: AnnotationNode;
    // private sugarAnnotations: AnnotationNode[];
    // private sugarInjector: SugarInjector;
    // private wrapperInfo: InjectionInfo;
    doPostInject(arg0: () => void): void;
    getDelegate(): InjectionInfo;
    getHandler(): MethodNode;
    granularInject(arg0: (param0: AbstractInsnNode[], param1: InjectionNodes$InjectionNode, param2: MethodInsnNode) => void): void;
    prepare(): void;
    // private prepareHandler(arg0: MethodNode): MethodNode;
}