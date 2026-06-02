import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { JumpInsnNode } from '../../../../../../org/objectweb/asm/tree/JumpInsnNode.d.ts'
import type { TypeInsnNode } from '../../../../../../org/objectweb/asm/tree/TypeInsnNode.d.ts'
import type { RedirectInjector } from '../../../../../../org/spongepowered/asm/mixin/injection/invoke/RedirectInjector.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { Target$Extension } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/Target$Extension.d.ts'
export class ModifyConstantInjector extends RedirectInjector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo)
    // private checkNarrowing(arg0: AbstractInsnNode[], arg1: AbstractInsnNode, arg2: Type): void;
    // private checkNarrowing(arg0: AbstractInsnNode[], arg1: AbstractInsnNode, arg2: Type, arg3: Type, arg4: number, arg5: string): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private injectConstantModifier(arg0: AbstractInsnNode[], arg1: AbstractInsnNode): void;
    // private injectExpandedConstantModifier(arg0: AbstractInsnNode[], arg1: JumpInsnNode): void;
    // private injectTypeConstantModifier(arg0: AbstractInsnNode[], arg1: TypeInsnNode): void;
    // private invokeConstantHandler(arg0: Type, arg1: AbstractInsnNode[], arg2: Target$Extension, arg3: AbstractInsnNode[], arg4: AbstractInsnNode[]): AbstractInsnNode;
}