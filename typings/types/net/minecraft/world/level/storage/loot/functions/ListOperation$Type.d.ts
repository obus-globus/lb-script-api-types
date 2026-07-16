import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { ListOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation.d.ts'
export class ListOperation$Type extends Enum<ListOperation$Type> implements StringRepresentable {
    static APPEND: ListOperation$Type;
    static CODEC: Codec<ListOperation$Type>;
    static INSERT: ListOperation$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REPLACE_ALL: ListOperation$Type;
    static REPLACE_SECTION: ListOperation$Type;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ListOperation$Type;
    static values(): ListOperation$Type[];
    private constructor(id: string, mapCodec: MapCodec<ListOperation>)
    // private id: string;
    // private mapCodec: MapCodec<ListOperation>;
    getSerializedName(): string;
    mapCodec(): MapCodec<ListOperation>;
    name(): "REPLACE_ALL" | "REPLACE_SECTION" | "INSERT" | "APPEND";
}