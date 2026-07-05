import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { InputBind } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind.d.ts'
import type { InputBind$BindAction } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction.d.ts'
import type { InputBind$Modifier } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class InputBindKt extends Object {
    /**
     * Binds to the given input name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L307 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:307}
     */
    static bind(value: Value<InputBind>, key: InputConstants$Key, action: InputBind$BindAction, modifiers: InputBind$Modifier[]): void;
    static bind(value: Value<InputBind>, name: string): void;
    static renderText(inputBind: InputBind): Component;
    /**
     * Unbinds the key by setting it to UNKNOWN_KEY.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L318 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:318}
     */
    static unbind(value: Value<InputBind>): void;
}