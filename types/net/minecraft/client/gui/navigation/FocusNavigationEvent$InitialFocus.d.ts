import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
export class FocusNavigationEvent$InitialFocus extends Object implements FocusNavigationEvent {
    constructor()
    getVerticalDirectionForInitialFocus(): ScreenDirection;
}