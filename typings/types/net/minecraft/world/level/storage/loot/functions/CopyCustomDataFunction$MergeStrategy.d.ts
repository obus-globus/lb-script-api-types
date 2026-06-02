import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { Tag } from '../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class CopyCustomDataFunction$MergeStrategy extends Enum<CopyCustomDataFunction$MergeStrategy> implements StringRepresentable {
    static APPEND: CopyCustomDataFunction$MergeStrategy;
    static CODEC: Codec<CopyCustomDataFunction$MergeStrategy>;
    static MERGE: CopyCustomDataFunction$MergeStrategy;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REPLACE: CopyCustomDataFunction$MergeStrategy;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CopyCustomDataFunction$MergeStrategy;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    merge(target: Tag, path: NbtPathArgument$NbtPath, sources: Tag[]): void;
    name(): "REPLACE" | "APPEND" | "MERGE";
}