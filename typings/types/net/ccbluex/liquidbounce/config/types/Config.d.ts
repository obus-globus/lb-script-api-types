import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class Config extends ValueGroup {
    constructor(name: string, value: Value<Object>[])
    readonly jsonFile: File;
    /**
     * We write to this temp file, we can safely rename {@link jsonTmpFile} to {@link jsonFile},
     * to eliminate any chances of data loss.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Config.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Config.kt:39}
     */
    readonly jsonTmpFile: File;
}