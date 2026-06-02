import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
export interface IEnvironmentTokenProvider extends Object{
    getPriority(): number;
    getToken(arg0: string, arg1: MixinEnvironment): number;
}