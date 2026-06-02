import type { Window } from '../../../java/awt/Window.d.ts'
import type { WindowPeer } from '../../../java/awt/peer/WindowPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DialogPeer extends WindowPeer, Object{
    blockWindows(arg0: Window[]): void;
    setResizable(arg0: boolean): void;
    setTitle(arg0: string): void;
}