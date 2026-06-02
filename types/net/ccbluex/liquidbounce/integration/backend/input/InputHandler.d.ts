import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Interface for browsers that can handle input events
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:21}
 */
export interface InputHandler extends Object{
    /**
     * Handles character typed events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:56}
     */
    charTyped(codepoint: number): void;
    /**
     * Handles key press events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:46}
     */
    keyPressed(keyCode: number, scanCode: number, modifiers: number): void;
    /**
     * Handles key release events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:51}
     */
    keyReleased(keyCode: number, scanCode: number, modifiers: number): void;
    /**
     * Handles mouse click events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:26}
     */
    mouseClicked(mouseX: number, mouseY: number, mouseButton: number): void;
    /**
     * Handles mouse movement events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:36}
     */
    mouseMoved(mouseX: number, mouseY: number): void;
    /**
     * Handles mouse release events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:31}
     */
    mouseReleased(mouseX: number, mouseY: number, mouseButton: number): void;
    /**
     * Handles mouse scroll events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:41}
     */
    mouseScrolled(mouseX: number, mouseY: number, delta: number): void;
}