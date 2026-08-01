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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L307 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:307}
     */
    static bind(self: Value<InputBind>, key: InputConstants$Key, action: InputBind$BindAction, modifiers: InputBind$Modifier[]): void;
    static bind(self: Value<InputBind>, name: string): void;
    static renderText(self: InputBind): Component;
    /**
     * Unbinds the key by setting it to UNKNOWN_KEY.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L318 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:318}
     */
    static unbind(self: Value<InputBind>): void;
}