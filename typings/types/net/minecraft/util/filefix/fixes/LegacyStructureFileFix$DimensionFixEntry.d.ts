import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkNbt } from '../../../../../net/minecraft/util/filefix/access/ChunkNbt.d.ts'
import type { FileAccess } from '../../../../../net/minecraft/util/filefix/access/FileAccess.d.ts'
import type { SavedDataNbt } from '../../../../../net/minecraft/util/filefix/access/SavedDataNbt.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class LegacyStructureFileFix$DimensionFixEntry extends Record {
    private constructor(dimensionKey: ResourceKey<Level>, structureFileAccess: FileAccess<SavedDataNbt>[], chunkFileAccess: FileAccess<ChunkNbt>, structures: JavaMap<any, any>)
    // private chunkFileAccess: FileAccess<ChunkNbt>;
    // private dimensionKey: ResourceKey<Level>;
    // private structureFileAccess: FileAccess<SavedDataNbt>[];
    // private structures: JavaMap<any, any>;
    chunkFileAccess(): FileAccess<ChunkNbt>;
    dimensionKey(): ResourceKey<Level>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    structureFileAccess(): FileAccess<SavedDataNbt>[];
    structures(): JavaMap<any, any>;
    toString(): string;
}