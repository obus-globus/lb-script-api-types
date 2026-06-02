import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinConfig$IListener } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinConfig$IListener.d.ts'
import type { MixinCoprocessor$ProcessResult } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessor$ProcessResult.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
export abstract class MixinCoprocessor extends Object implements MixinConfig$IListener {
    constructor()
    // private willLogUnimplementedCouldTransform: boolean;
    couldTransform(arg0: string): boolean;
    getName(): string;
    onInit(arg0: MixinInfo): void;
    onPrepare(arg0: MixinInfo): void;
    postProcess(arg0: string, arg1: ClassNode): boolean;
    process(arg0: string, arg1: ClassNode): MixinCoprocessor$ProcessResult;
}