import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinInfo$State } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$State.d.ts'
import type { MixinInfo$SubType } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$SubType.d.ts'
export class MixinInfo$Reloaded extends MixinInfo$State {
    constructor(null_: MixinInfo$Reloaded, arg1: MixinInfo$State, arg2: ClassNode)
    // private previous: MixinInfo$State;
    validateChanges(arg0: MixinInfo$SubType, arg1: ClassInfo[]): void;
}