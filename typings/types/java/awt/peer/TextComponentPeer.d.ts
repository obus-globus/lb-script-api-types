import type { InputMethodRequests } from '../../../java/awt/im/InputMethodRequests.d.ts'
import type { ComponentPeer } from '../../../java/awt/peer/ComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TextComponentPeer extends ComponentPeer, Object{
    getCaretPosition(): number;
    getInputMethodRequests(): InputMethodRequests;
    getSelectionEnd(): number;
    getSelectionStart(): number;
    getText(): string;
    select(arg0: number, arg1: number): void;
    setCaretPosition(arg0: number): void;
    setEditable(arg0: boolean): void;
    setText(arg0: string): void;
}