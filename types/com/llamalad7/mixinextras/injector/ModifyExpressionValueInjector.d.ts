import type { ModifyExpressionValueInjector$TargetInfo } from '../../../../com/llamalad7/mixinextras/injector/ModifyExpressionValueInjector$TargetInfo.d.ts'
import type { StackExtension } from '../../../../com/llamalad7/mixinextras/injector/StackExtension.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { Injector } from '../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class ModifyExpressionValueInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    // private checkTargetReturnsAValue(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private cleanIntLikeType(arg0: Type): Type;
    // private getReturnType(arg0: InjectionNodes$InjectionNode): Type;
    // private getValueNode(arg0: InjectionNodes$InjectionNode, arg1: Type): AbstractInsnNode;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectValueModifier(arg0: AbstractInsnNode[], arg1: AbstractInsnNode, arg2: Type, arg3: ModifyExpressionValueInjector$TargetInfo, arg4: boolean, arg5: StackExtension): void;
    // private invokeHandler(arg0: Type, arg1: AbstractInsnNode[], arg2: AbstractInsnNode[], arg3: StackExtension): void;
}