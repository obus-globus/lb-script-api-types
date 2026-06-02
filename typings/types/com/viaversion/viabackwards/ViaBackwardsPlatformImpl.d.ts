import type { ViaBackwardsConfig } from '../../../com/viaversion/viabackwards/api/ViaBackwardsConfig.d.ts'
import type { ViaBackwardsPlatform } from '../../../com/viaversion/viabackwards/api/ViaBackwardsPlatform.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaBackwardsPlatformImpl extends Object implements ViaBackwardsPlatform {
    static MINIMUM_VV_VERSION: string;
    constructor()
    readonly logger: Logger;
    disable(): void;
    enable(): void;
    getDataFolder(): File;
    getLogger(): Logger;
    init(arg0: ViaBackwardsConfig): void;
    init(arg0: File): void;
    isOutdated(): boolean;
    isOutdated(): boolean;
}