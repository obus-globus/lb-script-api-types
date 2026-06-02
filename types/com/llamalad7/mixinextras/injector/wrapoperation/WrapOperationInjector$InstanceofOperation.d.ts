import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { WrapOperationInjector$OperationType } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$OperationType.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class WrapOperationInjector$InstanceofOperation extends WrapOperationInjector$OperationType {
    constructor(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension)
    getName(): string;
    validate(): boolean;
}