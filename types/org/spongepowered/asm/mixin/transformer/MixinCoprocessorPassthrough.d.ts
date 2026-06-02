import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinCoprocessor } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessor.d.ts'
import type { MixinCoprocessor$ProcessResult } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessor$ProcessResult.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
export class MixinCoprocessorPassthrough extends MixinCoprocessor {
    constructor()
    // private loadable: string[];
    couldTransform(arg0: string): boolean;
    getName(): string;
    onPrepare(arg0: MixinInfo): void;
    process(arg0: string, arg1: ClassNode): MixinCoprocessor$ProcessResult;
    registerLoadable(arg0: string): void;
}