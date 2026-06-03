import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { Injector } from '../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class WrapWithConditionInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    // private checkTargetIsLogicallyVoid(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private getEffectiveArgTypes(arg0: AbstractInsnNode): Type[];
    // private getReturnType(arg0: AbstractInsnNode): Type;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    invokeHandler(arg0: AbstractInsnNode[]): AbstractInsnNode;
    invokeHandler(arg0: AbstractInsnNode[], arg1: MethodNode): AbstractInsnNode;
    // private invokeHandler(arg0: AbstractInsnNode[], arg1: Type, arg2: Type[], arg3: Type[], arg4: boolean, arg5: AbstractInsnNode[], arg6: AbstractInsnNode[]): void;
    // private wrapTargetWithCondition(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
}