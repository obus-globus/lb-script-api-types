import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { IMixinInfo } from '../../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ArgsClassGenerator } from '../../../../../../../org/spongepowered/asm/mixin/injection/invoke/arg/ArgsClassGenerator.d.ts'
import type { SyntheticClassInfo } from '../../../../../../../org/spongepowered/asm/mixin/transformer/SyntheticClassInfo.d.ts'
export class ArgsClassGenerator$ArgsClassInfo extends SyntheticClassInfo {
    constructor(null_: ArgsClassGenerator, arg1: IMixinInfo, arg2: string, arg3: string)
    // private args: Type[];
    // private desc: string;
    loaded: number;
    getSignature(): string;
    isLoaded(): boolean;
}