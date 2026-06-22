import type { Config } from '../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ViaBedrockConfig$BlobCacheMode } from '../../../../net/raphimc/viabedrock/platform/ViaBedrockConfig$BlobCacheMode.d.ts'
import type { ViaBedrockConfig$PackCacheMode } from '../../../../net/raphimc/viabedrock/platform/ViaBedrockConfig$PackCacheMode.d.ts'
export interface ViaBedrockConfig extends Config, Object{
    getBlobCacheMode(): ViaBedrockConfig$BlobCacheMode;
    getPackCacheMode(): ViaBedrockConfig$PackCacheMode;
    getResourcePackHost(): string;
    getResourcePackPort(): number;
    getResourcePackUrl(): string;
    reload(): void;
    save(): void;
    set(arg0: string, arg1: Object): void;
    shouldDisableServerBlacklist(): boolean;
    shouldEnableExperimentalFeatures(): boolean;
    shouldTranslateResourcePacks(): boolean;
    shouldTranslateShowCoordinatesGameRule(): boolean;
}