import type { TagReader } from '../../../../../com/viaversion/nbt/io/TagReader.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataLoader } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class VAFMappingDataLoader extends MappingDataLoader {
    static INSTANCE: VAFMappingDataLoader;
    static INSTANCE: MappingDataLoader;
    static MAPPINGS_READER: TagReader<Map$Entry<string, Tag>[]>;
    static loadGlobalIdentifiers(): void;
    constructor()
    getDataFolder(): File;
    getLogger(): Logger;
}