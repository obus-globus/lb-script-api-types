import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ViaAprilFoolsConfig as ViaAprilFoolsConfig_2 } from '../../../com/viaversion/viaaprilfools/platform/ViaAprilFoolsConfig.d.ts'
import type { Config } from '../../../com/viaversion/viaversion/util/Config.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ViaAprilFoolsConfig extends Config implements ViaAprilFoolsConfig_2 {
    constructor(arg0: File, arg1: Logger)
    getDefaultConfigInputStream(): InputStream;
    getDefaultConfigURL(): URL;
    getUnsupportedOptions(): string[];
    handleConfig(arg0: JavaMap<string, Object>): void;
    // private loadFields(): void;
    reload(): void;
}