import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TagReader } from '../../../../../com/viaversion/nbt/io/TagReader.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { ViaFabricPlusMappingDataLoader$Material } from '../../../../../com/viaversion/viafabricplus/protocoltranslator/impl/ViaFabricPlusMappingDataLoader$Material.d.ts'
import type { MappingDataLoader } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ViaFabricPlusMappingDataLoader extends MappingDataLoader {
    static BLOCK_MATERIALS: JavaMap<string, JavaMap<ProtocolVersion, string>>;
    static INSTANCE: ViaFabricPlusMappingDataLoader;
    static MAPPINGS_READER: TagReader<Map$Entry<string, Tag>[]>;
    static MATERIALS: JavaMap<string, ViaFabricPlusMappingDataLoader$Material>;
    static getBlockMaterial(paramarg0: Block): string;
    static getBlockMaterial(paramarg0: Block, paramarg1: ProtocolVersion): string;
    static loadGlobalIdentifiers(): void;
    private constructor()
}