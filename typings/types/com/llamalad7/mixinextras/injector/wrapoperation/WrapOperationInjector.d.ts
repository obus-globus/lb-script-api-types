import type { StackExtension } from '../../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { WrapOperationInjector$OperationConstructor } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$OperationConstructor.d.ts'
import type { WrapOperationInjector$OperationType } from '../../../../../com/llamalad7/mixinextras/injector/wrapoperation/WrapOperationInjector$OperationType.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { Injector } from '../../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class WrapOperationInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    // private operationType: Type;
    // private operationTypes: (param0: AbstractInsnNode[], param1: InjectionNodes$InjectionNode, param2: StackExtension) => WrapOperationInjector$OperationType[];
    // private cleanIntLikeArgs(arg0: Type[]): Type[];
    // private getCurrentArgTypes(arg0: InjectionNodes$InjectionNode): Type[];
    // private getEffectiveArgTypes(arg0: AbstractInsnNode): Type[];
    // private getOriginalArgTypes(arg0: InjectionNodes$InjectionNode): Type[];
    // private getReturnType(arg0: InjectionNodes$InjectionNode): Type;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    invokeHandler(arg0: AbstractInsnNode[]): AbstractInsnNode;
    invokeHandler(arg0: AbstractInsnNode[], arg1: MethodNode): AbstractInsnNode;
    // private invokeHandler(arg0: AbstractInsnNode[], arg1: WrapOperationInjector$OperationType, arg2: InjectionNodes$InjectionNode, arg3: Type[], arg4: Type, arg5: AbstractInsnNode[], arg6: StackExtension): AbstractInsnNode;
    // private makeOperation(arg0: WrapOperationInjector$OperationType, arg1: Type[], arg2: Type, arg3: AbstractInsnNode[], arg4: boolean, arg5: Type[]): void;
    // private newComparisonExpression(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension): WrapOperationInjector$OperationType;
    // private newInstantiationOperation(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode, arg2: StackExtension): WrapOperationInjector$OperationType;
    // private wrapOperation(arg0: AbstractInsnNode[], arg1: WrapOperationInjector$OperationType, arg2: StackExtension): void;
}