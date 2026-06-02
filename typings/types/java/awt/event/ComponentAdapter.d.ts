import type { ComponentEvent } from '../../../java/awt/event/ComponentEvent.d.ts'
import type { ComponentListener } from '../../../java/awt/event/ComponentListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ComponentAdapter extends Object implements ComponentListener {
    constructor()
    componentHidden(arg0: ComponentEvent): void;
    componentMoved(arg0: ComponentEvent): void;
    componentResized(arg0: ComponentEvent): void;
    componentShown(arg0: ComponentEvent): void;
}