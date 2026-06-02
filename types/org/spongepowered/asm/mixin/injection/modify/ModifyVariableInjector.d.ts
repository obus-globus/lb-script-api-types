import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { Injector } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector.d.ts'
import type { Injector$InjectorData } from '../../../../../../org/spongepowered/asm/mixin/injection/code/Injector$InjectorData.d.ts'
import type { InjectorTarget } from '../../../../../../org/spongepowered/asm/mixin/injection/code/InjectorTarget.d.ts'
import type { LocalVariableDiscriminator } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator.d.ts'
import type { ModifyVariableInjector$Context } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/ModifyVariableInjector$Context.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
import type { Target$Extension } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/Target$Extension.d.ts'
export class ModifyVariableInjector extends Injector {
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: string, paramarg1: string): boolean;
    static canCoerce(paramarg0: Type, paramarg1: Type): boolean;
    constructor(arg0: InjectionInfo, arg1: LocalVariableDiscriminator)
    // private discriminator: LocalVariableDiscriminator;
    findTargetNodes(arg0: InjectorTarget, arg1: InjectionPoint, arg2: E[]): boolean;
    getTargetNodeKey(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): string;
    // private inject(arg0: ModifyVariableInjector$Context, arg1: Injector$InjectorData, arg2: Target$Extension, arg3: number): void;
    inject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    preInject(arg0: AbstractInsnNode[], arg1: InjectionNodes$InjectionNode): void;
    // private printLocals(arg0: AbstractInsnNode[], arg1: ModifyVariableInjector$Context): void;
    sanityCheck(arg0: AbstractInsnNode[], arg1: InjectionPoint[]): void;
}