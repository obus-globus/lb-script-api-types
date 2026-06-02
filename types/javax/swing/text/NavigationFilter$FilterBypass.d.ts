import type { Caret } from '../../../javax/swing/text/Caret.d.ts'
import type { Position$Bias } from '../../../javax/swing/text/Position$Bias.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class NavigationFilter$FilterBypass extends Object {
    constructor()
    getCaret(): Caret;
    moveDot(arg0: number, arg1: Position$Bias): void;
    setDot(arg0: number, arg1: Position$Bias): void;
}