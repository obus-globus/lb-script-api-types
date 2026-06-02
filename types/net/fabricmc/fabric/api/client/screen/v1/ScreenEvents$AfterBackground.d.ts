import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ScreenEvents$AfterBackground extends Object{
    afterBackground(arg0: Screen, arg1: GuiGraphicsExtractor, arg2: number, arg3: number, arg4: number): void;
}