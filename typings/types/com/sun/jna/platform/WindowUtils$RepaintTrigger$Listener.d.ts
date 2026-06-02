import type { AWTEvent } from '../../../../java/awt/AWTEvent.d.ts'
import type { AWTEventListener } from '../../../../java/awt/event/AWTEventListener.d.ts'
import type { ComponentEvent } from '../../../../java/awt/event/ComponentEvent.d.ts'
import type { ComponentListener } from '../../../../java/awt/event/ComponentListener.d.ts'
import type { HierarchyEvent } from '../../../../java/awt/event/HierarchyEvent.d.ts'
import type { HierarchyListener } from '../../../../java/awt/event/HierarchyListener.d.ts'
import type { WindowAdapter } from '../../../../java/awt/event/WindowAdapter.d.ts'
import type { WindowEvent } from '../../../../java/awt/event/WindowEvent.d.ts'
export class WindowUtils$RepaintTrigger$Listener extends WindowAdapter implements AWTEventListener, ComponentListener, HierarchyListener {
    constructor(null_: WindowUtils$RepaintTrigger$Listener)
    componentHidden(arg0: ComponentEvent): void;
    componentMoved(arg0: ComponentEvent): void;
    componentResized(arg0: ComponentEvent): void;
    componentShown(arg0: ComponentEvent): void;
    eventDispatched(arg0: AWTEvent): void;
    hierarchyChanged(arg0: HierarchyEvent): void;
    windowOpened(arg0: WindowEvent): void;
}