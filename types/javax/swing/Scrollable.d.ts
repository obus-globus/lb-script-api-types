import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Scrollable extends Object{
    getPreferredScrollableViewportSize(): Dimension;
    getScrollableBlockIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
    getScrollableTracksViewportHeight(): boolean;
    getScrollableTracksViewportWidth(): boolean;
    getScrollableUnitIncrement(arg0: Rectangle, arg1: number, arg2: number): number;
}