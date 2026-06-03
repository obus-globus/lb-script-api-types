import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { Injector } from '../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class ModifyReceiverInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    // private checkTargetIsValid(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private getEffectiveArgTypes(arg0: AbstractInsnNode): Type[];
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode[]): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectReceiverModifier(arg0: AbstractInsnNode[], arg1: Type[], arg2: Type[], arg3: boolean, arg4: AbstractInsnNode[]): void;
    // private modifyReceiverOfTarget(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
}