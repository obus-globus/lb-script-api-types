import type { Channel } from '../../../java/nio/channels/Channel.d.ts'
import type { SelectionKey } from '../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../java/nio/channels/Selector.d.ts'
import type { AbstractInterruptibleChannel } from '../../../java/nio/channels/spi/AbstractInterruptibleChannel.d.ts'
import type { SelectorProvider } from '../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SelectableChannel extends AbstractInterruptibleChannel implements Channel {
    constructor()
    blockingLock(): Object;
    configureBlocking(arg0: boolean): SelectableChannel;
    isBlocking(): boolean;
    isRegistered(): boolean;
    keyFor(arg0: Selector): SelectionKey;
    provider(): SelectorProvider;
    register(arg0: Selector, arg1: number): SelectionKey;
    register(arg0: Selector, arg1: number, arg2: Object): SelectionKey;
    validOps(): number;
}