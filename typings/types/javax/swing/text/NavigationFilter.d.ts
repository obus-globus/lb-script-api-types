import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
import type { NavigationFilter$FilterBypass } from '../../../javax/swing/text/NavigationFilter$FilterBypass.d.ts'
import type { Position$Bias } from '../../../javax/swing/text/Position$Bias.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NavigationFilter extends Object {
    constructor()
    getNextVisualPositionFrom(arg0: JTextComponent, arg1: number, arg2: Position$Bias, arg3: number, arg4: Position$Bias[]): number;
    moveDot(arg0: NavigationFilter$FilterBypass, arg1: number, arg2: Position$Bias): void;
    setDot(arg0: NavigationFilter$FilterBypass, arg1: number, arg2: Position$Bias): void;
}