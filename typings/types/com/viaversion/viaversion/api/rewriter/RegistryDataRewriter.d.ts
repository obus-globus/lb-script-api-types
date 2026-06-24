import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface RegistryDataRewriter extends Object{
    handle(arg0: PacketWrapper): void;
    hasRegistriesToRemove(): boolean;
    sendMissingRegistries(arg0: UserConnection): void;
    shouldRemoveRegistry(arg0: string): boolean;
    updateDialog(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
}