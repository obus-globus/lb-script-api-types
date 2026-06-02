import type { InjectorWrapperImpl$HandlerCallCallback } from '../../../../com/llamalad7/mixinextras/wrapper/InjectorWrapperImpl$HandlerCallCallback.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MethodInsnNode } from '../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { MixinTargetContext } from '../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
export abstract class InjectorWrapperImpl extends Object {
    constructor(arg0: InjectionInfo, arg1: MixinTargetContext, arg2: MethodNode, arg3: AnnotationNode, arg4: boolean)
    // private classNode: ClassNode;
    // private useGranularInject: boolean;
    // private wrapperInfo: InjectionInfo;
    addCallbackInvocation(arg0: MethodNode): void;
    // private doGranularInject(arg0: (param0: AbstractInsnNode[], param1: InjectionNodes$InjectionNode, param2: MethodInsnNode) => void): void;
    doInject(): void;
    doPostInject(arg0: () => void): void;
    // private findHandlerCalls(arg0: AbstractInsnNode[]): MethodInsnNode[];
    getDelegate(): InjectionInfo;
    getHandler(): MethodNode;
    getOrder(): number;
    granularInject(arg0: (param0: AbstractInsnNode[], param1: InjectionNodes$InjectionNode, param2: MethodInsnNode) => void): void;
    granularInjectNotSupported(): RuntimeException;
    isValid(): boolean;
    preInject(): void;
    prepare(): void;
    usesGranularInject(): boolean;
}