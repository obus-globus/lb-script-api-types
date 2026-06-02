import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { AbstractSelectableChannel } from '../../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSelector } from '../../../../org/newsclub/net/unix/AFSelector.d.ts'
import type { AFSocketCore } from '../../../../org/newsclub/net/unix/AFSocketCore.d.ts'
export class AFSelectionKey extends SelectionKey {
    static OP_ACCEPT: number;
    static OP_CONNECT: number;
    static OP_READ: number;
    static OP_WRITE: number;
    constructor(arg0: AFSelector, arg1: AbstractSelectableChannel, arg2: number, arg3: Object)
    // private cancelled: AtomicBoolean;
    // private chann: SelectableChannel;
    // private core: AFSocketCore;
    // private ops: number;
    // private opsReady: number;
    // private sel: AFSelector;
    cancel(): void;
    // private cancel1(): void;
    cancelNoRemove(): void;
    channel(): SelectableChannel;
    getAFCore(): AFSocketCore;
    hasOpInvalid(): boolean;
    interestOps(): number;
    interestOps(arg0: number): SelectionKey;
    isCancelled(): boolean;
    isSelected(): boolean;
    isValid(): boolean;
    readyOps(): number;
    selector(): Selector;
    setOpsReady(arg0: number): void;
    toString(): string;
}