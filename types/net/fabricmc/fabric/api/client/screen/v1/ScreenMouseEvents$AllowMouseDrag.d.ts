import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export interface ScreenMouseEvents$AllowMouseDrag extends Object{
    allowMouseDrag(arg0: Screen, arg1: MouseButtonEvent, arg2: number, arg3: number): boolean;
}