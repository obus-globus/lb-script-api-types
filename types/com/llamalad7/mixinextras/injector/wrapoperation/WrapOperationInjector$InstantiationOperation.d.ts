import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { WrapOperationInjector$OperationType } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$OperationType.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class WrapOperationInjector$InstantiationOperation extends WrapOperationInjector$OperationType {
    constructor(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension, arg3: InjectionNodes$InjectionNode)
    // private isDuped: boolean;
    // private newInsn: AbstractInsnNode;
    // private newNode: InjectionNodes$InjectionNode;
    afterHandlerCall(arg0: AbstractInsnNode[], arg1: AbstractInsnNode): void;
    copyNode(arg0: AbstractInsnNode[], arg1: number, arg2: (param0: AbstractInsnNode[]) => void, arg3: Type): void;
    getName(): string;
    validate(): boolean;
}