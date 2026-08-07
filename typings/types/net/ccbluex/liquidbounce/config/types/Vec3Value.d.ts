import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
export class Vec3Value<T extends unknown> extends Value<T> {
    constructor(name: string, aliases: string[], default_: T, useLocateButton: boolean, valueType: ValueType)
    /**
     * For theme only
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Vec3Value.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Vec3Value.kt:31}
     */
    readonly useLocateButton: boolean;
}