import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
export interface MixinConfig$IListener extends Object{
    onInit(arg0: MixinInfo): void;
    onPrepare(arg0: MixinInfo): void;
}