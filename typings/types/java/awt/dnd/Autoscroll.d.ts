import type { Insets } from '../../../java/awt/Insets.d.ts'
import type { Point } from '../../../java/awt/Point.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Autoscroll extends Object{
    autoscroll(arg0: Point): void;
    getAutoscrollInsets(): Insets;
}