import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { Tag } from '../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CopyCustomDataFunction$MergeStrategy extends Enum<CopyCustomDataFunction$MergeStrategy> implements StringRepresentable {
    static APPEND: CopyCustomDataFunction$MergeStrategy;
    static CODEC: Codec<CopyCustomDataFunction$MergeStrategy>;
    static MERGE: CopyCustomDataFunction$MergeStrategy;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REPLACE: CopyCustomDataFunction$MergeStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CopyCustomDataFunction$MergeStrategy;
    static values(): CopyCustomDataFunction$MergeStrategy[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    merge(target: Tag, path: NbtPathArgument$NbtPath, sources: Tag[]): void;
    name(): "REPLACE" | "APPEND" | "MERGE";
}