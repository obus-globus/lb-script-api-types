import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ScrollbarPeer extends ComponentPeer, Object{
    setLineIncrement(arg0: number): void;
    setPageIncrement(arg0: number): void;
    setValues(arg0: number, arg1: number, arg2: number, arg3: number): void;
}