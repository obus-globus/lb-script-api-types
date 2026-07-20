import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { FileValue } from '../../../../../net/ccbluex/liquidbounce/config/types/FileValue.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ValueUtilsKt extends Object {
    /**
     * Convert the {@link FileValue} to a {@link ReadOnlyProperty} of {@link DynamicTexture}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt:46}
     */
    static toTextureProperty<V extends EventListener & Value<Object>>(self: FileValue, owner: V, printErrorToChat: boolean): ReadOnlyProperty<Object, DynamicTexture>;
}