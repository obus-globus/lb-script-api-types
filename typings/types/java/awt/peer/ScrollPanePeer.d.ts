import type { Adjustable } from '../../../java/awt/Adjustable.d.ts'
import type { ContainerPeer } from '../../../java/awt/peer/ContainerPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ScrollPanePeer extends ContainerPeer, Object{
    childResized(arg0: number, arg1: number): void;
    getHScrollbarHeight(): number;
    getVScrollbarWidth(): number;
    setScrollPosition(arg0: number, arg1: number): void;
    setUnitIncrement(arg0: Adjustable, arg1: number): void;
    setValue(arg0: Adjustable, arg1: number): void;
}