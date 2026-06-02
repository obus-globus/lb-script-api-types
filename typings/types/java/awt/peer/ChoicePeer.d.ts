import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChoicePeer extends ComponentPeer, Object{
    add(arg0: string, arg1: number): void;
    remove(arg0: number): void;
    removeAll(): void;
    select(arg0: number): void;
}