import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TagReader } from '../../../../../com/viaversion/nbt/io/TagReader.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataLoader$AddConsumer } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$AddConsumer.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { MappingDataLoader$MappingHolderSupplier } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$MappingHolderSupplier.d.ts'
import type { MappingDataLoader$MappingsSupplier } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$MappingsSupplier.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class MappingDataLoader extends Object {
    static INSTANCE: MappingDataLoader;
    static MAPPINGS_READER: TagReader<Map$Entry<string, Tag>[]>;
    static loadGlobalIdentifiers(): void;
    constructor(arg0: Class<Object>, arg1: string)
    // private cacheValid: boolean;
    // private dataLoaderClass: Class<Object>;
    // private dataPath: string;
    // private mappingsCache: JavaMap<string, Map$Entry<string, Tag>[]>;
    arrayToMap(arg0: JsonElement[]): JavaMap<any, any>;
    clearCache(): void;
    getDataFolder(): File;
    getLogger(): Logger;
    getResource(arg0: string): InputStream;
    identifierFromGlobalId(arg0: string, arg1: number): string;
    // private identifiers(arg0: Mappings, arg1: string): string[];
    identifiersFromGlobalIds(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: string): MappingDataLoader$IdentifiersPair;
    identifiersFromGlobalIds(arg0: Map$Entry<string, Tag>[], arg1: string): string[];
    indexedObjectToMap(arg0: JsonObject): JavaMap<any, any>;
    loadData(arg0: string): JsonObject;
    loadFromDataDir(arg0: string): JsonObject;
    loadMappings(arg0: Map$Entry<string, Tag>[], arg1: string): Mappings;
    loadMappings<V extends unknown, M extends Mappings>(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: (param0: number) => V, arg3: (param0: V, param1: number, param2: number) => void, arg4: (param0: V, param1: number) => M): Mappings;
    loadNBT(arg0: string): Map$Entry<string, Tag>[];
    loadNBT(arg0: string, arg1: boolean): Map$Entry<string, Tag>[];
    loadNBTFromFile(arg0: string): Map$Entry<string, Tag>[];
}