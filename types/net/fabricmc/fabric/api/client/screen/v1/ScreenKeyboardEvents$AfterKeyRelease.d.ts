import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
export interface ScreenKeyboardEvents$AfterKeyRelease extends Object{
    afterKeyRelease(arg0: Screen, arg1: KeyEvent): void;
}