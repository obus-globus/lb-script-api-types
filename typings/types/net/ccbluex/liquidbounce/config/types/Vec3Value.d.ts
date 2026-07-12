import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
export class Vec3Value<T extends unknown> extends Value<T> {
    constructor(name: string, aliases: string[], default_: T, useLocateButton: boolean, valueType: ValueType)
    /**
     * For theme only
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/config/types/Vec3Value.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/Vec3Value.kt:31}
     */
    readonly useLocateButton: boolean;
}