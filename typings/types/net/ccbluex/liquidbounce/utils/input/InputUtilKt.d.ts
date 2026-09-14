import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InputBind$Modifier } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier.d.ts'
export class InputUtilKt extends Object {
    static getAvailableInputKeys(): string[];
    /**
     * Retrieves a set of reduced keyboard input names available in InputUtil.
     *
     * @returns A set of simplified keyboard input names.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:90}
     */
    static getAvailableKeyboardKeys(): string[];
    /**
     * Retrieves a set of reduced mouse input names available in InputUtil.
     *
     * @returns A set of simplified mouse input names.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:100}
     */
    static getAvailableMouseKeys(): string[];
    /**
     * Translates a key name to an InputUtil.Key using InputConstants key codes.
     * If the name is unrecognized, defaults to NONE.
     *
     * The input can be provided in the following formats:
     * - Full key name: "key.mouse.left", "key.keyboard.a", "key.keyboard.keypad.decimal"
     * - Abbreviated: "a" -> "key.keyboard.a", "left_shift" -> "key.keyboard.left.shift"
     *
     * @param name The key name as a string.
     * @returns The corresponding InputUtil.Key object.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:36}
     */
    static inputByName(name: string): InputConstants$Key;
    /**
     * Checks whether this key is currently pressed.
     *
     * This extension property uses the current window handle to determine if
     * the key represented by this {@link InputConstants.Key} is being pressed.
     *
     * @returns `true` if the key is pressed; otherwise, `false`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:70}
     */
    static isPressed(paramarg0: InputConstants$Key): boolean;
    /**
     * Reduces a full key name (e.g., "key.keyboard.a") to its minimal form (e.g., "a").
     * This is useful for simplifying key names for easier recognition.
     *
     * @param translationKey The full key name as a string.
     * @returns The reduced key name as a string.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:80}
     */
    static reduceInputName(translationKey: string): string;
    static toModifierOrNull(self: InputConstants$Key): InputBind$Modifier | null;
}