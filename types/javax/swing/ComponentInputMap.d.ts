import type { InputMap } from '../../javax/swing/InputMap.d.ts'
import type { JComponent } from '../../javax/swing/JComponent.d.ts'
import type { KeyStroke } from '../../javax/swing/KeyStroke.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ComponentInputMap extends InputMap {
    constructor(arg0: JComponent)
    readonly component: JComponent;
    clear(): void;
    getComponent(): JComponent;
    put(arg0: KeyStroke, arg1: Object): void;
    remove(arg0: KeyStroke): void;
    setParent(arg0: InputMap): void;
}