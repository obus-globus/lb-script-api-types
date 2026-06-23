import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractChanneledNetworkAddon } from '../../../../../../net/fabricmc/fabric/impl/networking/AbstractChanneledNetworkAddon.d.ts'
import type { GlobalReceiverRegistry } from '../../../../../../net/fabricmc/fabric/impl/networking/GlobalReceiverRegistry.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientCommonPacketListenerImpl } from '../../../../../../net/minecraft/client/multiplayer/ClientCommonPacketListenerImpl.d.ts'
import type { Connection } from '../../../../../../net/minecraft/network/Connection.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class ClientCommonNetworkAddon<H extends unknown, T extends ClientCommonPacketListenerImpl> extends AbstractChanneledNetworkAddon<H> {
    constructor(arg0: GlobalReceiverRegistry<H>, arg1: Connection, arg2: string, arg3: T, arg4: Minecraft)
    // private client: Minecraft;
    // private isServerReady: boolean;
    // private listener: T;
    handleRegistration(arg0: Identifier): void;
    handleUnregistration(arg0: Identifier): void;
    isReservedChannel(arg0: Identifier): boolean;
    onServerReady(): void;
    schedule(arg0: () => void): void;
}