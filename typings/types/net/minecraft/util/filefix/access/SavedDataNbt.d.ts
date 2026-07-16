import type { DSL$TypeReference } from '../../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { CompressedNbt } from '../../../../../net/minecraft/util/filefix/access/CompressedNbt.d.ts'
import type { CompressedNbt$MissingSeverity } from '../../../../../net/minecraft/util/filefix/access/CompressedNbt$MissingSeverity.d.ts'
export class SavedDataNbt extends CompressedNbt {
    constructor(type: DSL$TypeReference, path: Path, targetVersion: number, missingSeverity: CompressedNbt$MissingSeverity)
    // private targetVersion: number;
    // private type: DSL$TypeReference;
    read(): Optional<Dynamic<Tag>>;
    write<T extends unknown>(data: Dynamic<T>): void;
}