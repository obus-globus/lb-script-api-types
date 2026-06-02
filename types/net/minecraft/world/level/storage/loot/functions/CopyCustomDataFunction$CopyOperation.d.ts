import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { Tag } from '../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { CopyCustomDataFunction$MergeStrategy } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyCustomDataFunction$MergeStrategy.d.ts'
export class CopyCustomDataFunction$CopyOperation extends Record {
    static CODEC: Codec<CopyCustomDataFunction$CopyOperation>;
    private constructor(sourcePath: NbtPathArgument$NbtPath, targetPath: NbtPathArgument$NbtPath, op: CopyCustomDataFunction$MergeStrategy)
    // private op: CopyCustomDataFunction$MergeStrategy;
    // private sourcePath: NbtPathArgument$NbtPath;
    // private targetPath: NbtPathArgument$NbtPath;
    apply(target: () => Tag, source: Tag): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    op(): CopyCustomDataFunction$MergeStrategy;
    sourcePath(): NbtPathArgument$NbtPath;
    targetPath(): NbtPathArgument$NbtPath;
    toString(): string;
}