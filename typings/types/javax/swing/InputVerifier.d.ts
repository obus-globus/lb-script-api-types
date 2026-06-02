import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class InputVerifier extends Object {
    constructor()
    shouldYieldFocus(arg0: JComponent): boolean;
    shouldYieldFocus(arg0: JComponent, arg1: JComponent): boolean;
    verify(arg0: JComponent): boolean;
    verifyTarget(arg0: JComponent): boolean;
}