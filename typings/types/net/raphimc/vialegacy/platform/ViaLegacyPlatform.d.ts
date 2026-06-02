import type { File } from '../../../../java/io/File.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ViaLegacyConfig } from '../../../../net/raphimc/vialegacy/platform/ViaLegacyConfig.d.ts'
export interface ViaLegacyPlatform extends Object{
    getCpeAppName(): string;
    getDataFolder(): File;
    getLogger(): Logger;
    init(arg0: File): void;
    init(arg0: ViaLegacyConfig): void;
}