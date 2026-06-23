import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { CompressedNbt } from '../../../../../net/minecraft/util/filefix/access/CompressedNbt.d.ts'
export class PlayerData extends CompressedNbt {
    constructor(path: Path[], targetVersion: number)
    // private targetVersion: number;
    read(): Optional<Dynamic<Tag>>;
    write<T extends Object | number | string | boolean>(data: Dynamic<T>): void;
}