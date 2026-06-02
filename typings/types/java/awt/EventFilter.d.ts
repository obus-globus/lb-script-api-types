import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { EventFilter$FilterAction } from '../../java/awt/EventFilter$FilterAction.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface EventFilter extends Object{
    acceptEvent(arg0: AWTEvent): EventFilter$FilterAction;
}