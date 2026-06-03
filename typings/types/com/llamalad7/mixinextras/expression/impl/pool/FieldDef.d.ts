import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { SimpleMemberDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/SimpleMemberDefinition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../org/objectweb/asm/Handle.d.ts'
import type { AbstractInsnNode } from '../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { MemberInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/MemberInfo.d.ts'
export class FieldDef extends Object implements SimpleMemberDefinition {
    constructor(arg0: string, arg1: InjectionInfo)
    // private memberInfo: MemberInfo;
    matches(arg0: FlowValue): boolean;
    matches(arg0: Handle): boolean;
    matches(arg0: AbstractInsnNode): boolean;
    matches(arg0: FlowValue): boolean;
    matches(arg0: Handle): boolean;
}