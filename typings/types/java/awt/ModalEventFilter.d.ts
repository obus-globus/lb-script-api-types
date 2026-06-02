import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Dialog } from '../../java/awt/Dialog.d.ts'
import type { EventFilter } from '../../java/awt/EventFilter.d.ts'
import type { EventFilter$FilterAction } from '../../java/awt/EventFilter$FilterAction.d.ts'
import type { Window } from '../../java/awt/Window.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ModalEventFilter extends Object implements EventFilter {
    constructor(arg0: Dialog)
    // private disabled: boolean;
    // private modalDialog: Dialog;
    acceptEvent(arg0: AWTEvent): EventFilter$FilterAction;
    acceptWindow(arg0: Window): EventFilter$FilterAction;
    compareTo(arg0: ModalEventFilter): number;
    disable(): void;
    getModalDialog(): Dialog;
}