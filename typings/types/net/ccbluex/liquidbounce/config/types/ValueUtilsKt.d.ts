import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { FileValue } from '../../../../../net/ccbluex/liquidbounce/config/types/FileValue.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ValueUtilsKt extends Object {
    /**
     * Convert the {@link FileValue} to a {@link ReadOnlyProperty} of {@link DynamicTexture}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt:46}
     */
    static toTextureProperty(fileValue: FileValue, owner: Object | null, printErrorToChat: boolean): ReadOnlyProperty<Object, DynamicTexture>;
}