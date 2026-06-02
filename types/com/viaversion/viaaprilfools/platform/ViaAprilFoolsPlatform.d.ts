import type { ViaAprilFoolsConfig } from '../../../../com/viaversion/viaaprilfools/platform/ViaAprilFoolsConfig.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaAprilFoolsPlatform extends Object{
    getDataFolder(): File;
    getLogger(): Logger;
    init(arg0: ViaAprilFoolsConfig): void;
    init(arg0: File): void;
}