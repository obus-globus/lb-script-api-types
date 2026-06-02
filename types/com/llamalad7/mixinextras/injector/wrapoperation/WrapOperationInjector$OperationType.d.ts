import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export abstract class WrapOperationInjector$OperationType extends Object {
    constructor(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension)
    // private currentTarget: AbstractInsnNode;
    // private node: InjectionNodes$InjectionNode;
    // private originalTarget: AbstractInsnNode;
    // private stack: StackExtension;
    // private target: AbstractInsnNode[];
    afterHandlerCall(arg0: AbstractInsnNode[], arg1: AbstractInsnNode): void;
    copyNode(arg0: AbstractInsnNode[], arg1: number, arg2: (param0: AbstractInsnNode[]) => void, arg3: Type): void;
    getName(): string;
    validate(): boolean;
}