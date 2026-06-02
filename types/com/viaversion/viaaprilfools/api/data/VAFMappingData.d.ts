import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class VAFMappingData extends MappingDataBase {
    constructor(arg0: string, arg1: string)
    getLogger(): Logger;
    loadMappings(arg0: Map$Entry<string, Tag>[], arg1: string): Mappings;
    readMappedIdentifiersFile(arg0: string): Map$Entry<string, Tag>[];
    readMappingsFile(arg0: string): Map$Entry<string, Tag>[];
}