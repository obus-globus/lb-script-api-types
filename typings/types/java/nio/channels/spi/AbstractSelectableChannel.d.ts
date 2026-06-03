import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSelectableChannel extends SelectableChannel {
    constructor(arg0: SelectorProvider)
    // private keyCount: number;
    // private keyLock: Object;
    // private keys: SelectionKey[];
    // private nonBlocking: boolean;
    // private provider: SelectorProvider;
    // private regLock: Object;
    // private addKey(arg0: SelectionKey): void;
    blockingLock(): Object;
    configureBlocking(arg0: boolean): SelectableChannel;
    // private findKey(arg0: Selector): SelectionKey;
    // private forEach(arg0: (param0: SelectionKey) => void): void;
    // private haveValidKeys(): boolean;
    implCloseChannel(): void;
    implCloseSelectableChannel(): void;
    implConfigureBlocking(arg0: boolean): void;
    isBlocking(): boolean;
    isRegistered(): boolean;
    keyFor(arg0: Selector): SelectionKey;
    provider(): SelectorProvider;
    register(arg0: Selector, arg1: number): SelectionKey;
    register(arg0: Selector, arg1: number, arg2: Object): SelectionKey;
    removeKey(arg0: SelectionKey): void;
}