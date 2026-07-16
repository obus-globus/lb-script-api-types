import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Interface for browsers that can handle input events
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:24}
 */
export interface InputHandler extends Object{
    /**
     * Handles character typed events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:59}
     */
    charTyped(codepoint: number): void;
    /**
     * Handles key press events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:49}
     */
    keyPressed(keyCode: number, scanCode: number, modifiers: number): void;
    /**
     * Handles key release events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:54}
     */
    keyReleased(keyCode: number, scanCode: number, modifiers: number): void;
    /**
     * Handles mouse click events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:29}
     */
    mouseClicked(mouseX: number, mouseY: number, mouseButton: number): void;
    /**
     * Handles mouse movement events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:39}
     */
    mouseMoved(mouseX: number, mouseY: number): void;
    /**
     * Handles mouse release events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:34}
     */
    mouseReleased(mouseX: number, mouseY: number, mouseButton: number): void;
    /**
     * Handles mouse scroll events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputHandler.kt:44}
     */
    mouseScrolled(mouseX: number, mouseY: number, delta: number): void;
}