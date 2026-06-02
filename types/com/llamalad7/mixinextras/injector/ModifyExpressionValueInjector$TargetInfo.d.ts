import type { ArrayCreationInfo } from '../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/ArrayCreationInfo.d.ts'
import type { ComparisonInfo } from '../../../../com/llamalad7/mixinextras/expression/impl/utils/ComparisonInfo.d.ts'
import type { StackExtension } from '../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class ModifyExpressionValueInjector$TargetInfo extends Object {
    constructor(null_: ModifyExpressionValueInjector$TargetInfo, arg1: AbstractInsnNode[], arg2: InjectionNodes$InjectionNode)
    // private arrayCreationInfo: ArrayCreationInfo;
    // private comparison: ComparisonInfo;
    // private isDupedFactoryRedirect: boolean;
    // private isDynamicInstanceofRedirect: boolean;
    // private isStringConcat: boolean;
    // private target: AbstractInsnNode[];
    getInsertionPoint(arg0: AbstractInsnNode): AbstractInsnNode;
    invokeHandler(arg0: Type, arg1: AbstractInsnNode[], arg2: StackExtension): void;
}