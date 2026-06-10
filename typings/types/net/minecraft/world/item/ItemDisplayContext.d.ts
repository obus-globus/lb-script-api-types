import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class ItemDisplayContext extends Enum<ItemDisplayContext> implements StringRepresentable {
    static BY_ID: (param0: number) => ItemDisplayContext;
    static CODEC: Codec<ItemDisplayContext>;
    static FIRST_PERSON_LEFT_HAND: ItemDisplayContext;
    static FIRST_PERSON_RIGHT_HAND: ItemDisplayContext;
    static FIXED: ItemDisplayContext;
    static GROUND: ItemDisplayContext;
    static GUI: ItemDisplayContext;
    static HEAD: ItemDisplayContext;
    static NONE: ItemDisplayContext;
    static ON_SHELF: ItemDisplayContext;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static THIRD_PERSON_LEFT_HAND: ItemDisplayContext;
    static THIRD_PERSON_RIGHT_HAND: ItemDisplayContext;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ItemDisplayContext;
    static values(): (Object | null)[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private name: string;
    firstPerson(): boolean;
    getId(): number;
    getSerializedName(): string;
    leftHand(): boolean;
    name(): "NONE" | "THIRD_PERSON_LEFT_HAND" | "THIRD_PERSON_RIGHT_HAND" | "FIRST_PERSON_LEFT_HAND" | "FIRST_PERSON_RIGHT_HAND" | "HEAD" | "GUI" | "GROUND" | "FIXED" | "ON_SHELF";
}