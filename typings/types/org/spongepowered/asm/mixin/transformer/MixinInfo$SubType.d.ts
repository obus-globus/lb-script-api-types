import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { MixinInfo$MixinClassNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinClassNode.d.ts'
import type { MixinInfo$State } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$State.d.ts'
import type { MixinPreProcessorStandard } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinPreProcessorStandard.d.ts'
export abstract class MixinInfo$SubType extends Object {
    constructor(arg0: MixinInfo, arg1: string, arg2: boolean)
    // private annotationType: string;
    // private detached: boolean;
    // private mixin: MixinInfo;
    // private targetMustBeInterface: boolean;
    createPreProcessor(arg0: MixinInfo$MixinClassNode): MixinPreProcessorStandard;
    getInterfaces(): E[];
    isDetachedSuper(): boolean;
    isLoadable(): boolean;
    validate(arg0: MixinInfo$State, arg1: ClassInfo[]): void;
    validateInnerClass(arg0: ClassNode): void;
    validateTarget(arg0: string, arg1: ClassInfo): void;
}