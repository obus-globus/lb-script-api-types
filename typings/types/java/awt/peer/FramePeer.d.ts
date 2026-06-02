import type { MenuBar } from '../../../java/awt/MenuBar.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { WindowPeer } from '../../../java/awt/peer/WindowPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FramePeer extends WindowPeer, Object{
    emulateActivation(arg0: boolean): void;
    getBoundsPrivate(): Rectangle;
    getState(): number;
    setBoundsPrivate(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setMaximizedBounds(arg0: Rectangle): void;
    setMenuBar(arg0: MenuBar): void;
    setResizable(arg0: boolean): void;
    setState(arg0: number): void;
    setTitle(arg0: string): void;
}