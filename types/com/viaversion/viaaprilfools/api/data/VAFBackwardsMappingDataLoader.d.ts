import type { TagReader } from '../../../../../com/viaversion/nbt/io/TagReader.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingDataLoader } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingDataLoader.d.ts'
import type { MappingDataLoader } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class VAFBackwardsMappingDataLoader extends BackwardsMappingDataLoader {
    static INSTANCE: VAFBackwardsMappingDataLoader;
    static INSTANCE: BackwardsMappingDataLoader;
    static INSTANCE: MappingDataLoader;
    static MAPPINGS_READER: TagReader<Map$Entry<string, Tag>[]>;
    static loadGlobalIdentifiers(): void;
    constructor()
    getDataFolder(): File;
    getLogger(): Logger;
}