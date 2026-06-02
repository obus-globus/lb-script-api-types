import type { ViaAprilFoolsConfig } from '../../../com/viaversion/viaaprilfools/platform/ViaAprilFoolsConfig.d.ts'
import type { ViaAprilFoolsPlatform } from '../../../com/viaversion/viaaprilfools/platform/ViaAprilFoolsPlatform.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaAprilFoolsPlatformImpl extends Object implements ViaAprilFoolsPlatform {
    constructor()
    constructor(arg0: boolean)
    readonly logger: Logger;
    getDataFolder(): File;
    getLogger(): Logger;
    init(arg0: ViaAprilFoolsConfig): void;
    init(arg0: File): void;
}