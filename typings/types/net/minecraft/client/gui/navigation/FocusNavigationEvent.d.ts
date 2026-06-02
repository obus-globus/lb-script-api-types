import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
export interface FocusNavigationEvent extends Object{
    getVerticalDirectionForInitialFocus(): ScreenDirection;
}