import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { MixinEnvironment$Phase } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment$Phase.d.ts'
import type { IMixinConfig } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { IMixinErrorHandler } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinErrorHandler.d.ts'
import type { IMixinErrorHandler$ErrorAction } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinErrorHandler$ErrorAction.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { InvalidMixinException } from '../../../../../org/spongepowered/asm/mixin/transformer/throwables/InvalidMixinException.d.ts'
export class MixinProcessor$ErrorPhase extends Enum<MixinProcessor$ErrorPhase> {
    static APPLY: MixinProcessor$ErrorPhase;
    static PREPARE: MixinProcessor$ErrorPhase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MixinProcessor$ErrorPhase;
    static values(): MixinProcessor$ErrorPhase[];
    private constructor()
    // private text: string;
    getContext(arg0: IMixinInfo, arg1: string): string;
    getErrorMessage(arg0: IMixinInfo, arg1: IMixinConfig, arg2: MixinEnvironment$Phase): string;
    getLogMessage(arg0: string, arg1: InvalidMixinException, arg2: IMixinInfo): string;
    onError(arg0: IMixinErrorHandler, arg1: string, arg2: InvalidMixinException, arg3: IMixinInfo, arg4: IMixinErrorHandler$ErrorAction): IMixinErrorHandler$ErrorAction;
    name(): "PREPARE" | "APPLY";
}