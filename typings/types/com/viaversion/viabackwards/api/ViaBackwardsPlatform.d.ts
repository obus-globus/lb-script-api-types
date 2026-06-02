import type { ViaBackwardsConfig } from '../../../../com/viaversion/viabackwards/api/ViaBackwardsConfig.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaBackwardsPlatform extends Object{
    disable(): void;
    enable(): void;
    getDataFolder(): File;
    getLogger(): Logger;
    init(arg0: ViaBackwardsConfig): void;
    init(arg0: File): void;
    isOutdated(): boolean;
}