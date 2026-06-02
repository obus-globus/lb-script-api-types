import type { ActionEvent } from '../../../java/awt/event/ActionEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ActionListener extends EventListener, Object{
    actionPerformed(arg0: ActionEvent): void;
}