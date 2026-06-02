import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { TextAlignment } from '../../../../../net/minecraft/client/gui/TextAlignment.d.ts'
export interface MultiLineLabel extends Object{
    getLineCount(): number;
    getWidth(): number;
    visitLines(align: TextAlignment, anchorX: number, topY: number, lineHeight: number, output: ActiveTextCollector): number;
}