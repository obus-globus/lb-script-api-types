import type { SelectableChannel } from '../../../java/nio/channels/SelectableChannel.d.ts'
import type { Selector } from '../../../java/nio/channels/Selector.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SelectionKey extends Object {
    static OP_ACCEPT: number;
    static OP_CONNECT: number;
    static OP_READ: number;
    static OP_WRITE: number;
    constructor()
    // private attachment: Object;
    attach(arg0: Object): Object;
    attachment(): Object;
    cancel(): void;
    channel(): SelectableChannel;
    interestOps(): number;
    interestOps(arg0: number): SelectionKey;
    interestOpsAnd(arg0: number): number;
    interestOpsOr(arg0: number): number;
    isAcceptable(): boolean;
    isConnectable(): boolean;
    isReadable(): boolean;
    isValid(): boolean;
    isWritable(): boolean;
    readyOps(): number;
    selector(): Selector;
}