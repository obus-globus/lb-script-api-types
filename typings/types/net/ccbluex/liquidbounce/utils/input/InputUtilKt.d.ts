import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InputBind$Modifier } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier.d.ts'
export class InputUtilKt extends Object {
    static getAvailableInputKeys(): string[];
    /**
     * Retrieves a set of reduced mouse input names available in InputUtil.
     *
     * @returns A set of simplified mouse input names.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:78}
     */
    static getAvailableKeyboardKeys(): string[];
    /**
     * Retrieves a set of reduced keyboard input names available in InputUtil.
     *
     * @returns A set of simplified keyboard input names.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L88 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:88}
     */
    static getAvailableMouseKeys(): string[];
    /**
     * Translates a key name to an InputUtil.Key using GLFW key codes.
     * If the name is unrecognized, defaults to NONE.
     *
     * The input can be provided in the following formats:
     * - Full key name: "key.mouse.left", "key.keyboard.a", "key.keyboard.keypad.decimal"
     * - Abbreviated: "a" -> "key.keyboard.a", "lshift" -> "key.keyboard.left_shift"
     *
     * @param name The key name as a string.
     * @returns The corresponding InputUtil.Key object.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:25}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:55}
     */
    static isPressed(paramarg0: InputConstants$Key): boolean;
    /**
     * Reduces a full key name (e.g., "key.keyboard.a") to its minimal form (e.g., "a").
     * This is useful for simplifying key names for easier recognition.
     *
     * @param translationKey The full key name as a string.
     * @returns The reduced key name as a string.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:66}
     */
    static reduceInputName(translationKey: string): string;
    /**
     * Try to parse the key into {@link InputBind.Modifier} instance.
     *
     * @returns null if it's not a valid modifier.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputUtil.kt:100}
     */
    static toModifierOrNull(key: InputConstants$Key): InputBind$Modifier;
}