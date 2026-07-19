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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt:46}
     */
    static toTextureProperty<V extends EventListener & Value<Object>>(self: FileValue, owner: V, printErrorToChat: boolean): ReadOnlyProperty<Object, DynamicTexture>;
}