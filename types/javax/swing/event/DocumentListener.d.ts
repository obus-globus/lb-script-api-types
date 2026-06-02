import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { DocumentEvent } from '../../../javax/swing/event/DocumentEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DocumentListener extends EventListener, Object{
    changedUpdate(arg0: DocumentEvent): void;
    insertUpdate(arg0: DocumentEvent): void;
    removeUpdate(arg0: DocumentEvent): void;
}