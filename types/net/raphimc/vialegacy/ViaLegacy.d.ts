import type { Object } from '../../../java/lang/Object.d.ts'
import type { ViaLegacyConfig } from '../../../net/raphimc/vialegacy/platform/ViaLegacyConfig.d.ts'
import type { ViaLegacyPlatform } from '../../../net/raphimc/vialegacy/platform/ViaLegacyPlatform.d.ts'
export class ViaLegacy extends Object {
    static IMPL_VERSION: string;
    static VERSION: string;
    static getConfig(): ViaLegacyConfig;
    static getPlatform(): ViaLegacyPlatform;
    static init(paramarg0: ViaLegacyPlatform, paramarg1: ViaLegacyConfig): void;
    private constructor()
}