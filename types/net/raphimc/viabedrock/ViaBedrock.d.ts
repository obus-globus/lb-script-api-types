import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourcePackHttpServer } from '../../../net/raphimc/viabedrock/api/resourcepack/http/ResourcePackHttpServer.d.ts'
import type { ViaBedrockConfig } from '../../../net/raphimc/viabedrock/platform/ViaBedrockConfig.d.ts'
import type { ViaBedrockPlatform } from '../../../net/raphimc/viabedrock/platform/ViaBedrockPlatform.d.ts'
export class ViaBedrock extends Object {
    static IMPL_VERSION: string;
    static VERSION: string;
    static getConfig(): ViaBedrockConfig;
    static getPlatform(): ViaBedrockPlatform;
    static getResourcePackServer(): ResourcePackHttpServer;
    static init(paramarg0: ViaBedrockPlatform, paramarg1: ViaBedrockConfig): void;
    private constructor()
}