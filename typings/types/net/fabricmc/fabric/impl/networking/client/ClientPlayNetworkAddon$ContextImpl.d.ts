import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { PacketContext } from '../../../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class ClientPlayNetworkAddon$ContextImpl extends Record implements ClientPlayNetworking$Context {
    private constructor(client: Minecraft, responseSender: PacketSender)
    // private client: Minecraft;
    // private responseSender: PacketSender;
    client(): Minecraft;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packetContext(): PacketContext;
    player(): LocalPlayer;
    responseSender(): PacketSender;
    toString(): string;
}