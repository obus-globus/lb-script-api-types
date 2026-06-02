import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ScreenEvents$BeforeTick extends Object{
    beforeTick(arg0: Screen): void;
}