import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Clicker } from '../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
export interface ClickPattern extends Object{
    fill(clickArray: number[], cps: { start: number; endInclusive: number; step: number }, clicker: Clicker<any>): void;
}