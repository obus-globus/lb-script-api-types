import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface LabelPeer extends ComponentPeer, Object{
    setAlignment(arg0: number): void;
    setText(arg0: string): void;
}