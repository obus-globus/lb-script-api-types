import type { ComponentAdapter } from '../../java/awt/event/ComponentAdapter.d.ts'
import type { ComponentEvent } from '../../java/awt/event/ComponentEvent.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
export class JViewport$ViewListener extends ComponentAdapter implements Serializable {
    constructor(null_: JViewport$ViewListener)
    componentResized(arg0: ComponentEvent): void;
}