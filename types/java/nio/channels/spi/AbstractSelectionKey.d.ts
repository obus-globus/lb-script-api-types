import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
export abstract class AbstractSelectionKey extends SelectionKey {
    static OP_ACCEPT: number;
    static OP_CONNECT: number;
    static OP_READ: number;
    static OP_WRITE: number;
    constructor()
    // private invalid: boolean;
    cancel(): void;
    invalidate(): void;
    isValid(): boolean;
}