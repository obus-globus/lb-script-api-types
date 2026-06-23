import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkNbt } from '../../../../../net/minecraft/util/filefix/access/ChunkNbt.d.ts'
import type { FileAccess } from '../../../../../net/minecraft/util/filefix/access/FileAccess.d.ts'
import type { SavedDataNbt } from '../../../../../net/minecraft/util/filefix/access/SavedDataNbt.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class LegacyStructureFileFix$DimensionFixEntry extends Record {
    private constructor(dimensionKey: ResourceKey<Level>, structureFileAccess: FileAccess<SavedDataNbt>[], chunkFileAccess: FileAccess<ChunkNbt>, structures: { [key: string]: any })
    // private chunkFileAccess: FileAccess<ChunkNbt>;
    // private dimensionKey: ResourceKey<Level>;
    // private structureFileAccess: FileAccess<SavedDataNbt>[];
    // private structures: { [key: string]: any };
    chunkFileAccess(): FileAccess<ChunkNbt>;
    dimensionKey(): ResourceKey<Level>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    structureFileAccess(): FileAccess<SavedDataNbt>[];
    structures(): { [key: string]: any };
    toString(): string;
}