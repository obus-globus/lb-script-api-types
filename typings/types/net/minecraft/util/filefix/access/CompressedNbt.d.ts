import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { CompressedNbt$MissingSeverity } from '../../../../../net/minecraft/util/filefix/access/CompressedNbt$MissingSeverity.d.ts'
export abstract class CompressedNbt extends Object implements AutoCloseable {
    constructor(path: Path[], missingSeverity: CompressedNbt$MissingSeverity)
    // private missingSeverity: CompressedNbt$MissingSeverity;
    // private path: Path[];
    close(): void;
    path(): Path[];
    read(): Optional<Dynamic<Tag>>;
    readFile(): Optional<Dynamic<Tag>>;
    write<T extends Object | number | string | boolean>(data: Dynamic<T>): void;
    writeFile<T extends Object | number | string | boolean>(data: Dynamic<T>): void;
}