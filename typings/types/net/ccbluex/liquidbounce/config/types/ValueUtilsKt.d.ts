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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/ValueUtils.kt:60}
     */
    static toTextureProperty<V extends EventListener & Value<Object>>(self: FileValue, owner: V, printErrorToChat: boolean): ReadOnlyProperty<Object, DynamicTexture>;
}