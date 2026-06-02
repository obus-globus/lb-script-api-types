import type { File } from '../../../../../java/io/File.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class Config extends ValueGroup {
    constructor(name: string, value: E[])
    readonly jsonFile: File;
    /**
     * We write to this temp file, we can safely rename {@link jsonTmpFile} to {@link jsonFile},
     * to eliminate any chances of data loss.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Config.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Config.kt:35}
     */
    readonly jsonTmpFile: File;
}