import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractNetworkAddon } from '../../../../../net/fabricmc/fabric/impl/networking/AbstractNetworkAddon.d.ts'
import type { PayloadTypeRegistryImpl } from '../../../../../net/fabricmc/fabric/impl/networking/PayloadTypeRegistryImpl.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class GlobalReceiverRegistry<H extends Object | number | string | boolean> extends Object {
    static DEFAULT_CHANNEL_NAME_MAX_LENGTH: number;
    constructor(arg0: PacketFlow, arg1: ConnectionProtocol, arg2: PayloadTypeRegistryImpl<any>)
    // private flow: PacketFlow;
    readonly handlers: Map<Identifier, H>;
    // private lock: ReadWriteLock;
    // private payloadTypeRegistry: PayloadTypeRegistryImpl<any>;
    readonly protocol: ConnectionProtocol;
    // private trackedAddons: AbstractNetworkAddon<H>[];
    assertPayloadType(arg0: Identifier): void;
    endSession(arg0: AbstractNetworkAddon<H>): void;
    getChannels(): Identifier[];
    getHandler(arg0: Identifier): H;
    getHandlers(): Map<Identifier, H>;
    getProtocol(): ConnectionProtocol;
    // private handleRegistration(arg0: Identifier, arg1: H): void;
    // private handleUnregistration(arg0: Identifier): void;
    // private logTrackedAddonSize(): void;
    registerGlobalReceiver(arg0: Identifier, arg1: H): boolean;
    startSession(arg0: AbstractNetworkAddon<H>): void;
    unregisterGlobalReceiver(arg0: Identifier): H;
}