import type { Dimension } from '../../../java/awt/Dimension.d.ts'
import type { TextComponentPeer } from '../../../java/awt/peer/TextComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TextAreaPeer extends TextComponentPeer, Object{
    getMinimumSize(arg0: number, arg1: number): Dimension;
    getPreferredSize(arg0: number, arg1: number): Dimension;
    insert(arg0: string, arg1: number): void;
    replaceRange(arg0: string, arg1: number, arg2: number): void;
}