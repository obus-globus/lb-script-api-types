import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodInsnNode } from '../../../../org/objectweb/asm/tree/MethodInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export interface InjectorWrapperImpl$HandlerCallCallback extends Object{
    onFound(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: MethodInsnNode): void;
}