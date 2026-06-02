import type { ComponentEvent } from '../../../java/awt/event/ComponentEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ComponentListener extends EventListener, Object{
    componentHidden(arg0: ComponentEvent): void;
    componentMoved(arg0: ComponentEvent): void;
    componentResized(arg0: ComponentEvent): void;
    componentShown(arg0: ComponentEvent): void;
}