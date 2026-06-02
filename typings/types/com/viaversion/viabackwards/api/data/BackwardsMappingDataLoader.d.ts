import type { TagReader } from '../../../../../com/viaversion/nbt/io/TagReader.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataLoader } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingDataLoader extends MappingDataLoader {
    static INSTANCE: BackwardsMappingDataLoader;
    static INSTANCE: MappingDataLoader;
    static MAPPINGS_READER: TagReader<Map$Entry<string, Tag>[]>;
    static loadGlobalIdentifiers(): void;
    constructor(arg0: Class<Object>, arg1: string)
    getDataFolder(): File;
    getLogger(): Logger;
    loadNBTFromDir(arg0: string): Map$Entry<string, Tag>[];
    // private mergeTags(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
}