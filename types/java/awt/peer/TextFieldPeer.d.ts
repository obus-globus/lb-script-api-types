import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { TextComponentPeer } from '../../../java/awt/peer/TextComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TextFieldPeer extends TextComponentPeer, Object{
    getMinimumSize(arg0: number): Dimension;
    getPreferredSize(arg0: number): Dimension;
    setEchoChar(arg0: string): void;
}