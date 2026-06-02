import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Channel } from '../../../../java/nio/channels/Channel.d.ts'
import type { InterruptibleChannel } from '../../../../java/nio/channels/InterruptibleChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Interruptible } from '../../../../sun/nio/ch/Interruptible.d.ts'
export abstract class AbstractInterruptibleChannel extends Object implements Channel, InterruptibleChannel {
    constructor()
    // private closeLock: Object;
    // private closed: boolean;
    // private interruptedTarget: Object;
    // private interruptor: Interruptible;
    begin(): void;
    close(): void;
    end(arg0: boolean): void;
    implCloseChannel(): void;
    isOpen(): boolean;
    // private trySetTarget(arg0: Thread): void;
}