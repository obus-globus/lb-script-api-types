import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { LastTags$RegistryTags } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/storage/LastTags$RegistryTags.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LastTags extends Object implements StorableObject {
    constructor(arg0: PacketWrapper)
    // private registryTags: LastTags$RegistryTags[];
    onRemove(): void;
    sendLastTags(arg0: UserConnection): boolean;
    sentDuringConfigPhase(): boolean;
    setSentDuringConfigPhase(arg0: boolean): void;
}