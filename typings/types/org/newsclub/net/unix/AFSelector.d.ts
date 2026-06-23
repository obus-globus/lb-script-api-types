import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { AbstractSelectableChannel } from '../../../../java/nio/channels/spi/AbstractSelectableChannel.d.ts'
import type { AbstractSelectionKey } from '../../../../java/nio/channels/spi/AbstractSelectionKey.d.ts'
import type { AbstractSelector } from '../../../../java/nio/channels/spi/AbstractSelector.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFPipe } from '../../../../org/newsclub/net/unix/AFPipe.d.ts'
import type { AFSelectionKey } from '../../../../org/newsclub/net/unix/AFSelectionKey.d.ts'
import type { AFSelector$PollFd } from '../../../../org/newsclub/net/unix/AFSelector$PollFd.d.ts'
import type { AFSelectorProvider } from '../../../../org/newsclub/net/unix/AFSelectorProvider.d.ts'
export class AFSelector extends AbstractSelector {
    static open(): Selector;
    constructor(arg0: AFSelectorProvider<any>)
    // private keysRegistered: Map<AFSelectionKey, number>;
    // private keysRegisteredKeySet: AFSelectionKey[];
    // private keysRegisteredPublic: SelectionKey[];
    // private pipeMsgReceiveBuffer: ByteBuffer;
    // private pipeMsgWakeUp: ByteBuffer;
    // private pollFd: AFSelector$PollFd;
    // private selectCount: AtomicInteger;
    // private selectedKeysPublic: SelectionKey[];
    // private selectedKeysSet: (Object | null)[];
    // private selectorPipe: AFPipe;
    // private selectorPipePollFd: AFSelector$PollFd;
    // private consumeAllBytesAfterPoll(): void;
    deregister(arg0: AbstractSelectionKey): void;
    // private deregister(arg0: AFSelectionKey): void;
    implCloseSelector(): void;
    // private initPollFd(arg0: AFSelector$PollFd): AFSelector$PollFd;
    keys(): SelectionKey[];
    // private receive(arg0: number, arg1: number): number;
    register(arg0: AbstractSelectableChannel, arg1: number, arg2: Object): SelectionKey;
    remove(arg0: AFSelectionKey): void;
    select(): number;
    select(arg0: (param0: SelectionKey) => void): number;
    select(arg0: (param0: SelectionKey) => void, arg1: number): number;
    select(arg0: number): number;
    // private select0(arg0: number): number;
    selectNow(): number;
    selectNow(arg0: (param0: SelectionKey) => void): number;
    selectedKeys(): SelectionKey[];
    // private setOpsReady(arg0: AFSelector$PollFd, arg1: number): void;
    // private updateSelectCount(): number;
    wakeup(): Selector;
}