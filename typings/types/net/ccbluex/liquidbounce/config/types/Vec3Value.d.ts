import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
export class Vec3Value<T extends unknown> extends Value<T> {
    constructor(name: string, aliases: string[], default_: T, useLocateButton: boolean, valueType: ValueType)
    /**
     * For theme only
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Vec3Value.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Vec3Value.kt:31}
     */
    readonly useLocateButton: boolean;
}