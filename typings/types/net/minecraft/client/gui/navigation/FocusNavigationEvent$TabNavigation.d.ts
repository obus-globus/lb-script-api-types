import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FocusNavigationEvent } from '../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
export class FocusNavigationEvent$TabNavigation extends Record implements FocusNavigationEvent {
    constructor(forward: boolean)
    // private forward: boolean;
    equals(o: Object | null): boolean;
    forward(): boolean;
    getVerticalDirectionForInitialFocus(): ScreenDirection;
    hashCode(): number;
    toString(): string;
}