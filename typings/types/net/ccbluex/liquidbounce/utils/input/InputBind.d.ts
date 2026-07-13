import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { InputConstants$Type } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Type.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyboardKeyEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { InputBind$BindAction } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction.d.ts'
import type { InputBind$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Companion.d.ts'
import type { InputBind$Modifier } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier.d.ts'
/**
 * Data class representing a key binding.
 * It holds the key to be bound and the action that will be triggered by the binding.
 *
 * @param boundKey The key that is bound to an action.
 * @param action The action triggered by the bound key (e.g., TOGGLE, HOLD).
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:51}
 */
export class InputBind extends Record {
    static Companion: InputBind$Companion;
    static UNBOUND: InputBind;
    /**
     * Alternative constructor to create a binding from the key type and key code.
     *
     * @param type The type of input (keyboard, mouse, etc.).
     * @param code The key or button code.
     * @param action The action to bind to this key.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:65}
     */
    constructor(boundKey: InputConstants$Key, action: InputBind$BindAction, modifiers: InputBind$Modifier[])
    constructor(type: InputConstants$Type, code: number, action: InputBind$BindAction)
    constructor(name: string)
    // private action: InputBind$BindAction;
    /*not mapped: */ action(): InputBind$BindAction;
    // private boundKey: InputConstants$Key;
    /*not mapped: */ boundKey(): InputConstants$Key;
    /**
     * Checks if the key is unbound (i.e., set to UNKNOWN_KEY).
     *
     * @returns True if the key is unbound, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:96}
     */
    /*not mapped: */ isUnbound(): boolean;
    /**
     * Retrieves the name of the key in uppercase format, excluding the category prefixes.
     *
     * @returns A formatted string representing the bound key's name, or "None" if unbound.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:81}
     */
    /*not mapped: */ keyName(): string;
    // private modifiers: InputBind$Modifier[];
    /*not mapped: */ modifiers(): InputBind$Modifier[];
    component1(): InputConstants$Key;
    component2(): InputBind$BindAction;
    component3(): InputBind$Modifier[];
    copy(boundKey: InputConstants$Key, action: InputBind$BindAction, modifiers: InputBind$Modifier[]): InputBind;
    equals(other: Object | null): boolean;
    /**
     * Handles the event. Returns the new state, assumes the original state is `false`.
     *
     * @param event The {@link KeyboardKeyEvent} to handle.
     * @param currentState The current state.
     * @returns The new state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L181 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:181}
     */
    getNewState(event: KeyboardKeyEvent, currentState: boolean): boolean;
    hashCode(): number;
    /**
     * Determines if the specified key matches the bound key.
     *
     * @param keyCode The GLFW key code to check.
     * @param scanCode The scan code to check.
     * @returns True if the key code or scan code matches the bound key, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:106}
     */
    matchesKey(keyCode: number, scanCode: number): boolean;
    /**
     * Determines if a keyboard press event matches this bind key and required modifiers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:137}
     */
    matchesKeyPress(event: KeyboardKeyEvent): boolean;
    /**
     * Determines if a keyboard release affects this bind key or one of its required modifiers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L146 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:146}
     */
    matchesKeyRelease(event: KeyboardKeyEvent): boolean;
    /**
     * Determines if the given modifiers match the required modifiers.
     *
     * @param mods The bits of modifiers.
     * @see org.lwjgl.glfw.GLFW
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L130 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:130}
     */
    matchesModifiers(mods: number): boolean;
    /**
     * Determines if the specified mouse button code matches the bound key.
     *
     * @param code The mouse button code to check.
     * @returns True if the mouse button matches the bound key, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:120}
     */
    matchesMouse(code: number): boolean;
    /**
     * Determines if a mouse press event matches this bind button and required modifiers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L157 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:157}
     */
    matchesMousePress(event: MouseButtonEvent): boolean;
    /**
     * Determines if a mouse release affects this bind button or one of its required modifiers.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L166 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:166}
     */
    matchesMouseRelease(event: MouseButtonEvent): boolean;
    toString(): string;
}