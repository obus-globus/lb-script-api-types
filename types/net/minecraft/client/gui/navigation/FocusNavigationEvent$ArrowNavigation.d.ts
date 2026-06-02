import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export class FocusNavigationEvent$ArrowNavigation extends Record implements FocusNavigationEvent {
    constructor(direction: ScreenDirection)
    constructor(direction: ScreenDirection, previousFocus: ScreenRectangle)
    // private direction: ScreenDirection;
    // private previousFocus: ScreenRectangle;
    direction(): ScreenDirection;
    equals(o: Object | null): boolean;
    getVerticalDirectionForInitialFocus(): ScreenDirection;
    hashCode(): number;
    previousFocus(): ScreenRectangle;
    toString(): string;
    with(previousFocus: ScreenRectangle): FocusNavigationEvent$ArrowNavigation;
}