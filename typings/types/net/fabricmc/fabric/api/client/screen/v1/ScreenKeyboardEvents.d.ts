import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenKeyboardEvents$AfterKeyPress } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AfterKeyPress.d.ts'
import type { ScreenKeyboardEvents$AfterKeyRelease } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AfterKeyRelease.d.ts'
import type { ScreenKeyboardEvents$AllowKeyPress } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AllowKeyPress.d.ts'
import type { ScreenKeyboardEvents$AllowKeyRelease } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$AllowKeyRelease.d.ts'
import type { ScreenKeyboardEvents$BeforeKeyPress } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$BeforeKeyPress.d.ts'
import type { ScreenKeyboardEvents$BeforeKeyRelease } from '../../../../../../../net/fabricmc/fabric/api/client/screen/v1/ScreenKeyboardEvents$BeforeKeyRelease.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
export class ScreenKeyboardEvents extends Object {
    static afterKeyPress(paramarg0: Screen): Event<(param0: Screen, param1: KeyEvent) => void>;
    static afterKeyRelease(paramarg0: Screen): Event<(param0: Screen, param1: KeyEvent) => void>;
    static allowKeyPress(paramarg0: Screen): Event<(param0: Screen, param1: KeyEvent) => boolean>;
    static allowKeyRelease(paramarg0: Screen): Event<(param0: Screen, param1: KeyEvent) => boolean>;
    static beforeKeyPress(paramarg0: Screen): Event<(param0: Screen, param1: KeyEvent) => void>;
    static beforeKeyRelease(paramarg0: Screen): Event<(param0: Screen, param1: KeyEvent) => void>;
    private constructor()
}