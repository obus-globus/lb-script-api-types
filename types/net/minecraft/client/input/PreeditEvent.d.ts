import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
export class PreeditEvent extends Record {
    static createFromCallback(parampreeditSize: number, parampreeditPtr: number, paramblockCount: number, paramblockSizesPtr: number, paramfocusedBlock: number, paramcaret: number): PreeditEvent;
    // private blocks: string[];
    // private caretPosition: number;
    // private focusedBlock: number;
    // private fullText: string;
    blocks(): string[];
    caretPosition(): number;
    equals(o: Object | null): boolean;
    focusedBlock(): number;
    fullText(): string;
    hashCode(): number;
    toFormattedText(focusedStyle: Style): MutableComponent;
    toString(): string;
}