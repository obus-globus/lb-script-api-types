import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LocalVariableDiscriminator$Context } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class ModifyVariableInjector$Context extends LocalVariableDiscriminator$Context {
    constructor(arg0: InjectionInfo, arg1: Type, arg2: boolean, arg3: AbstractInsnNode[], arg4: AbstractInsnNode)
    // private insns: AbstractInsnNode[];
}