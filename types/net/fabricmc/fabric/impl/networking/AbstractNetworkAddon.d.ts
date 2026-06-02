import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlobalReceiverRegistry } from '../../../../../net/fabricmc/fabric/impl/networking/GlobalReceiverRegistry.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export abstract class AbstractNetworkAddon<H extends Object | number | string | boolean> extends Object {
    constructor(arg0: GlobalReceiverRegistry<H>, arg1: string)
    // private disconnected: AtomicBoolean;
    // private handlers: Map<Identifier, H>;
    // private lock: ReadWriteLock;
    // private logger: Logger;
    // private receiver: GlobalReceiverRegistry<H>;
    // private assertNotReserved(arg0: Identifier): void;
    endSession(): void;
    getHandler(arg0: Identifier): H;
    getReceivableChannels(): Identifier[];
    handleDisconnect(): void;
    handleRegistration(arg0: Identifier): void;
    handleUnregistration(arg0: Identifier): void;
    invokeDisconnectEvent(): void;
    invokeInitEvent(): void;
    isReservedChannel(arg0: Identifier): boolean;
    lateInit(): void;
    registerChannel(arg0: Identifier, arg1: H): boolean;
    registerChannels(arg0: Map<Identifier, H>): void;
    unregisterChannel(arg0: Identifier): H;
}