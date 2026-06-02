import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export interface ScreenArea extends Object{
    bounds(): ScreenRectangle;
}