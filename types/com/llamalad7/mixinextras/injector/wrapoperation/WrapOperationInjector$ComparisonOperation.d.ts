import type { ComparisonInfo } from '../../../../../com/llamalad7/mixinextras/expression/impl/utils/ComparisonInfo.d.ts'
import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { WrapOperationInjector$MethodCallOperation } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$MethodCallOperation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class WrapOperationInjector$ComparisonOperation extends WrapOperationInjector$MethodCallOperation {
    constructor(null_: WrapOperationInjector$ComparisonOperation, arg1: AbstractInsnNode[], arg2: InjectionNodes$InjectionNode, arg3: StackExtension, arg4: boolean, arg5: ComparisonInfo)
    // private comparison: ComparisonInfo;
    // private isWrapped: boolean;
    afterHandlerCall(arg0: AbstractInsnNode[], arg1: AbstractInsnNode): void;
    copyNode(arg0: AbstractInsnNode[], arg1: number, arg2: (param0: AbstractInsnNode[]) => void, arg3: Type): void;
    getName(): string;
    validate(): boolean;
}