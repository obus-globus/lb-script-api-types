import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ModuleNameProtectKt extends Object {
    /**
     * Sanitizes texts which are sent to the client.
     * 1. Degenerates legacy formatting into new formatting {@link StringDecomposer}
     * 2. Applies {@link ModuleNameProtect} - if needed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect.kt#L273 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect.kt:273}
     */
    static sanitizeForeignInput(component: Component): Component;
}