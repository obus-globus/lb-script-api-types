import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { WrapOperationInjector } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector.d.ts'
import type { WrapOperationInjector$OperationType } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$OperationType.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class WrapOperationInjector$MethodCallOperation extends WrapOperationInjector$OperationType {
    constructor(null_: WrapOperationInjector, arg1: AbstractInsnNode[], arg2: InjectionNodes$InjectionNode, arg3: StackExtension)
    getName(): string;
    validate(): boolean;
}