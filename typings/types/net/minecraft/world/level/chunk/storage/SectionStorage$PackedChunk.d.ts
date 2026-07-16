import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { SimpleRegionStorage } from '../../../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
export class SectionStorage$PackedChunk<T extends unknown> extends Record {
    static parse<T extends unknown>(paramcodec: Codec<T>, paramops: DynamicOps<Tag>, paramtag: Tag, paramsimpleRegionStorage: SimpleRegionStorage, paramlevelHeightAccessor: LevelHeightAccessor): SectionStorage$PackedChunk<T>;
    private constructor(sectionsByY: { [key: string]: any }, versionChanged: boolean)
    // private sectionsByY: { [key: string]: any };
    // private versionChanged: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sectionsByY(): { [key: string]: any };
    toString(): string;
    versionChanged(): boolean;
}