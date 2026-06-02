import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { MixinEnvironment } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IEnvironmentTokenProvider } from '../../../../org/spongepowered/asm/mixin/extensibility/IEnvironmentTokenProvider.d.ts'
export class MixinEnvironment$TokenProviderWrapper extends Object implements Comparable<MixinEnvironment$TokenProviderWrapper> {
    constructor(arg0: IEnvironmentTokenProvider, arg1: MixinEnvironment)
    // private environment: MixinEnvironment;
    // private order: number;
    // private priority: number;
    // private provider: IEnvironmentTokenProvider;
    compareTo(arg0: MixinEnvironment$TokenProviderWrapper): number;
    getToken(arg0: string): number;
}