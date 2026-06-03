import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { InputBind } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
import type { InputBind$BindAction } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class InputBindKt extends Object {
    /**
     * Binds to the given input name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L304 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:304}
     */
    static bind(value: Value<InputBind>, key: InputConstants$Key, action: InputBind$BindAction, modifiers: (Object | null)[]): void;
    static bind(value: Value<InputBind>, name: string): void;
    static renderText(inputBind: InputBind): Component;
    /**
     * Unbinds the key by setting it to UNKNOWN_KEY.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L315 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:315}
     */
    static unbind(value: Value<InputBind>): void;
}