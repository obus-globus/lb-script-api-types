import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InvokeInjector } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/InvokeInjector.d.ts'
import type { ArgsClassGenerator } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/arg/ArgsClassGenerator.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class ModifyArgsInjector extends InvokeInjector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    // private argsClassGenerator: ArgsClassGenerator;
    checkTarget(arg0: AbstractInsnNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    injectAtInvoke(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private packArgs(arg0: AbstractInsnNode[], arg1: string, arg2: string): void;
    // private unpackArgs(arg0: AbstractInsnNode[], arg1: string, arg2: Type[]): void;
    // private verifyTarget(arg0: AbstractInsnNode[]): boolean;
}