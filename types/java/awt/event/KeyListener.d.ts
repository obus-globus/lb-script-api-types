import type { KeyEvent } from '../../../java/awt/event/KeyEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface KeyListener extends EventListener, Object{
    keyPressed(arg0: KeyEvent): void;
    keyReleased(arg0: KeyEvent): void;
    keyTyped(arg0: KeyEvent): void;
}