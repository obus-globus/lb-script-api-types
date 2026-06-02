import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ScreenMouseEvents$AfterMouseScroll extends Object{
    afterMouseScroll(arg0: Screen, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): boolean;
}