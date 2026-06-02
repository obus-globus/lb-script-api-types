import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { Injector } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export abstract class InvokeInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo, arg1: string)
    checkTarget(arg0: AbstractInsnNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    injectAtInvoke(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    sanityCheck(arg0: AbstractInsnNode[], arg1: InjectionPoint[]): void;
}