import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
export class RegistryDataRewriter1_21_9 extends BackwardsRegistryRewriter {
    constructor(arg0: BackwardsProtocol<any, any, any, any>)
    // private backwardsProtocol: BackwardsProtocol<any, any, any, any>;
    trackDimensionAndBiomes(arg0: UserConnection, arg1: string, arg2: RegistryEntry[]): void;
}