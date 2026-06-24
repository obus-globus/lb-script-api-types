import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { RegistryEntry } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BackwardsRegistryRewriter extends RegistryDataRewriter {
    constructor(arg0: BackwardsProtocol<any, any, any, any>)
    // private protocol: BackwardsProtocol<any, any, any, any>;
    handle(arg0: UserConnection, arg1: string, arg2: RegistryEntry[]): RegistryEntry[];
    handle(arg0: PacketWrapper): void;
    // private updateAttributes(arg0: Map$Entry<string, Tag>[]): void;
    // private updateBiomeEffects(arg0: Map$Entry<string, Tag>[]): void;
    updateJukeboxSongs(arg0: RegistryEntry[]): void;
    // private updateSound(arg0: Map$Entry<string, Tag>[], arg1: string): void;
}