import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../java/awt/event/ActionListener.d.ts'
import type { ItemEvent } from '../../java/awt/event/ItemEvent.d.ts'
import type { ItemListener } from '../../java/awt/event/ItemListener.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { AbstractButton } from '../../javax/swing/AbstractButton.d.ts'
import type { ChangeEvent } from '../../javax/swing/event/ChangeEvent.d.ts'
import type { ChangeListener } from '../../javax/swing/event/ChangeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AbstractButton$Handler extends Object implements ActionListener, ItemListener, Serializable, ChangeListener {
    constructor(null_: AbstractButton)
    actionPerformed(arg0: ActionEvent): void;
    itemStateChanged(arg0: ItemEvent): void;
    stateChanged(arg0: ChangeEvent): void;
}