import type { File } from '../../../../java/io/File.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ViaBedrockConfig } from '../../../../net/raphimc/viabedrock/platform/ViaBedrockConfig.d.ts'
export interface ViaBedrockPlatform extends Object{
    getBlobCacheFolder(): File;
    getDataCacheFolder(): File;
    getDataFolder(): File;
    getLogger(): Logger;
    getServerPacksFolder(): File;
    init(arg0: File): void;
    init(arg0: ViaBedrockConfig): void;
}