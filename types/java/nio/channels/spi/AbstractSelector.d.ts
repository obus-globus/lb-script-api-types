import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { AbstractSelectableChannel } from '../../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { AbstractSelectionKey } from '../../../../java/nio/channels/spi/AbstractSelectionKey.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Interruptible } from '../../../../sun/nio/ch/Interruptible.d.ts'
export abstract class AbstractSelector extends Selector {
    static open(): Selector;
    constructor(arg0: SelectorProvider)
    // private cancelledKeys: SelectionKey[];
    // private closed: boolean;
    // private interruptor: Interruptible;
    // private provider: SelectorProvider;
    begin(): void;
    cancel(arg0: SelectionKey): void;
    cancelledKeys(): SelectionKey[];
    close(): void;
    deregister(arg0: AbstractSelectionKey): void;
    end(): void;
    implCloseSelector(): void;
    isOpen(): boolean;
    provider(): SelectorProvider;
    register(arg0: AbstractSelectableChannel, arg1: number, arg2: Object): SelectionKey;
}