import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { IMixinConfig } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinConfig.d.ts'
import type { IMixinErrorHandler$ErrorAction } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinErrorHandler$ErrorAction.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
export interface IMixinErrorHandler extends Object{
    onApplyError(arg0: string, arg1: Throwable, arg2: IMixinInfo, arg3: IMixinErrorHandler$ErrorAction): IMixinErrorHandler$ErrorAction;
    onPrepareError(arg0: IMixinConfig, arg1: Throwable, arg2: IMixinInfo, arg3: IMixinErrorHandler$ErrorAction): IMixinErrorHandler$ErrorAction;
}