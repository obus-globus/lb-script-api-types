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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Config.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Config.kt:39}
     */
    readonly jsonTmpFile: File;
}