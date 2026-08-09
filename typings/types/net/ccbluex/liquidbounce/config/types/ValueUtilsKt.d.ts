import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { FileValue } from '../../../../../net/ccbluex/liquidbounce/config/types/FileValue.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ValueUtilsKt extends Object {
    static mapReadOnly<R extends unknown, T extends unknown>(self: Value<T>, transform: (param0: T) => R): ReadOnlyProperty<Object, R>;
    /**
     * Convert the {@link FileValue} to a {@link ReadOnlyProperty} of {@link DynamicTexture}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt:60}
     */
    static toTextureProperty<V extends EventListener & Value<Object>>(self: FileValue, owner: V, printErrorToChat: boolean): ReadOnlyProperty<Object, DynamicTexture>;
}