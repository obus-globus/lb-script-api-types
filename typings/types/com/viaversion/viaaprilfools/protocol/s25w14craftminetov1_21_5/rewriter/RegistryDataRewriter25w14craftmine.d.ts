import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
export class RegistryDataRewriter25w14craftmine extends BackwardsRegistryRewriter {
    constructor(arg0: BackwardsProtocol<any, any, any, any>)
    handle(arg0: UserConnection, arg1: string, arg2: RegistryEntry[]): RegistryEntry[];
    handle(arg0: PacketWrapper): void;
}