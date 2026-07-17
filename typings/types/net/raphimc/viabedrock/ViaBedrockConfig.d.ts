import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Config } from '../../../com/viaversion/viaversion/util/Config.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ViaBedrockConfig as ViaBedrockConfig_2 } from '../../../net/raphimc/viabedrock/platform/ViaBedrockConfig.d.ts'
import type { ViaBedrockConfig$BlobCacheMode } from '../../../net/raphimc/viabedrock/platform/ViaBedrockConfig$BlobCacheMode.d.ts'
import type { ViaBedrockConfig$PackCacheMode } from '../../../net/raphimc/viabedrock/platform/ViaBedrockConfig$PackCacheMode.d.ts'
export class ViaBedrockConfig extends Config implements ViaBedrockConfig_2 {
    constructor(arg0: File, arg1: Logger)
    readonly blobCacheMode: ViaBedrockConfig$BlobCacheMode;
    // private disableServerBlacklist: boolean;
    // private enableExperimentalFeatures: boolean;
    readonly packCacheMode: ViaBedrockConfig$PackCacheMode;
    readonly resourcePackHost: string;
    readonly resourcePackPort: number;
    readonly resourcePackUrl: string;
    // private translateResourcePacks: boolean;
    // private translateShowCoordinatesGameRule: boolean;
    getBlobCacheMode(): ViaBedrockConfig$BlobCacheMode;
    getDefaultConfigURL(): URL;
    getPackCacheMode(): ViaBedrockConfig$PackCacheMode;
    getResourcePackHost(): string;
    getResourcePackPort(): number;
    getResourcePackUrl(): string;
    getUnsupportedOptions(): string[];
    handleConfig(arg0: JavaMap<string, Object>): void;
    // private loadFields(): void;
    reload(): void;
    shouldDisableServerBlacklist(): boolean;
    shouldEnableExperimentalFeatures(): boolean;
    shouldTranslateResourcePacks(): boolean;
    shouldTranslateShowCoordinatesGameRule(): boolean;
}