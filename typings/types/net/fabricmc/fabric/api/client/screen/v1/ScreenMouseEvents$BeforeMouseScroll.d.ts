import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ScreenMouseEvents$BeforeMouseScroll extends Object{
    beforeMouseScroll(arg0: Screen, arg1: number, arg2: number, arg3: number, arg4: number): void;
}