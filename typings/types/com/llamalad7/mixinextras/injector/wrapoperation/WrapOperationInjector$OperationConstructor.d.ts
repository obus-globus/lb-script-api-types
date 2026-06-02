import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { WrapOperationInjector$OperationType } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$OperationType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export interface WrapOperationInjector$OperationConstructor extends Object{
    make(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension): WrapOperationInjector$OperationType;
}