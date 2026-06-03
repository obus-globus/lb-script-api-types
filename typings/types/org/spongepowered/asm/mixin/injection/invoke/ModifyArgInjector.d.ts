import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { InvokeInjector } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/InvokeInjector.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { Target$Extension } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/Target$Extension.d.ts'
export class ModifyArgInjector extends InvokeInjector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo, arg1: number)
    // private index: number;
    // private singleArgMode: boolean;
    checkTarget(arg0: AbstractInsnNode[]): void;
    findArgIndex(arg0: AbstractInsnNode[], arg1: Type[]): number;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    injectAtInvoke(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectMultiArgHandler(arg0: AbstractInsnNode[], arg1: Target$Extension, arg2: Type[], arg3: number, arg4: number, arg5: AbstractInsnNode[], arg6: boolean): void;
    // private injectSingleArgHandler(arg0: AbstractInsnNode[], arg1: Target$Extension, arg2: Type[], arg3: number, arg4: AbstractInsnNode[], arg5: boolean): void;
    sanityCheck(arg0: AbstractInsnNode[], arg1: InjectionPoint[]): void;
}