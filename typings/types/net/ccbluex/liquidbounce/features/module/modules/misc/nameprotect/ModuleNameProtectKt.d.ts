import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ModuleNameProtectKt extends Object {
    /**
     * Sanitizes texts which are sent to the client.
     * 1. Degenerates legacy formatting into new formatting {@link StringDecomposer}
     * 2. Applies {@link ModuleNameProtect} - if needed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect.kt#L278 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/ModuleNameProtect.kt:278}
     */
    static sanitizeForeignInput(component: Component): Component;
}