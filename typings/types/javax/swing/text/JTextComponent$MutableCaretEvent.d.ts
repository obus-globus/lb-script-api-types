import type { FocusEvent } from '../../../java/awt/event/FocusEvent.d.ts'
import type { FocusListener } from '../../../java/awt/event/FocusListener.d.ts'
import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { MouseListener } from '../../../java/awt/event/MouseListener.d.ts'
import type { CaretEvent } from '../../../javax/swing/event/CaretEvent.d.ts'
import type { ChangeEvent } from '../../../javax/swing/event/ChangeEvent.d.ts'
import type { ChangeListener } from '../../../javax/swing/event/ChangeListener.d.ts'
import type { JTextComponent } from '../../../javax/swing/text/JTextComponent.d.ts'
export class JTextComponent$MutableCaretEvent extends CaretEvent implements FocusListener, MouseListener, ChangeListener {
    constructor(arg0: JTextComponent)
    readonly dot: number;
    // private dragActive: boolean;
    readonly mark: number;
    fire(): void;
    focusGained(arg0: FocusEvent): void;
    focusLost(arg0: FocusEvent): void;
    getDot(): number;
    getMark(): number;
    mouseClicked(arg0: MouseEvent): void;
    mouseEntered(arg0: MouseEvent): void;
    mouseExited(arg0: MouseEvent): void;
    mousePressed(arg0: MouseEvent): void;
    mouseReleased(arg0: MouseEvent): void;
    stateChanged(arg0: ChangeEvent): void;
    toString(): string;
}