import type { Point } from '../../../java/awt/Point.d.ts'
import type { Window } from '../../../java/awt/Window.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MouseInfoPeer extends Object{
    fillPointWithCoords(arg0: Point): number;
    isWindowUnderMouse(arg0: Window): boolean;
}