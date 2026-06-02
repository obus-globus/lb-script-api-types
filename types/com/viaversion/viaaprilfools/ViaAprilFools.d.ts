import type { ViaAprilFoolsConfig } from '../../../com/viaversion/viaaprilfools/platform/ViaAprilFoolsConfig.d.ts'
import type { ViaAprilFoolsPlatform } from '../../../com/viaversion/viaaprilfools/platform/ViaAprilFoolsPlatform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaAprilFools extends Object {
    static IMPL_VERSION: string;
    static VERSION: string;
    static getConfig(): ViaAprilFoolsConfig;
    static getPlatform(): ViaAprilFoolsPlatform;
    static init(paramarg0: ViaAprilFoolsPlatform, paramarg1: ViaAprilFoolsConfig): void;
    private constructor()
}