import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class VAFBackwardsMappingData extends BackwardsMappingData {
    constructor(arg0: string, arg1: string, arg2: Class<Protocol<Object, Object, Object, Object>>)
    getLogger(): Logger;
    loadMappings(arg0: Map$Entry<string, Tag>[], arg1: string): Mappings;
    readMappingsFile(arg0: string): Map$Entry<string, Tag>[];
    readUnmappedIdentifiersFile(arg0: string): Map$Entry<string, Tag>[];
}