import type { Clipboard } from '../../../java/awt/datatransfer/Clipboard.d.ts'
import type { ClipboardOwner } from '../../../java/awt/datatransfer/ClipboardOwner.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { ActionEvent } from '../../../java/awt/event/ActionEvent.d.ts'
import type { ActionListener } from '../../../java/awt/event/ActionListener.d.ts'
import type { PropertyChangeEvent } from '../../../java/beans/PropertyChangeEvent.d.ts'
import type { PropertyChangeListener } from '../../../java/beans/PropertyChangeListener.d.ts'
import type { DocumentEvent } from '../../../javax/swing/event/DocumentEvent.d.ts'
import type { DocumentListener } from '../../../javax/swing/event/DocumentListener.d.ts'
import type { DefaultCaret } from '../../../javax/swing/text/DefaultCaret.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultCaret$Handler extends Object implements ClipboardOwner, ActionListener, PropertyChangeListener, DocumentListener {
    constructor(null_: DefaultCaret)
    actionPerformed(arg0: ActionEvent): void;
    changedUpdate(arg0: DocumentEvent): void;
    insertUpdate(arg0: DocumentEvent): void;
    lostOwnership(arg0: Clipboard, arg1: Transferable): void;
    propertyChange(arg0: PropertyChangeEvent): void;
    removeUpdate(arg0: DocumentEvent): void;
}