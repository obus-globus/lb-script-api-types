import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class HoverEvent$Action extends Enum<HoverEvent$Action> implements StringRepresentable {
    static CODEC: Codec<HoverEvent$Action>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SHOW_ENTITY: HoverEvent$Action;
    static SHOW_ITEM: HoverEvent$Action;
    static SHOW_TEXT: HoverEvent$Action;
    static UNSAFE_CODEC: Codec<HoverEvent$Action>;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): HoverEvent$Action;
    static values(): (Object | null)[];
    private constructor(name: string, allowFromServer: boolean, codec: MapCodec<HoverEvent>)
    // private allowFromServer: boolean;
    // private codec: MapCodec<HoverEvent>;
    // private name: string;
    getSerializedName(): string;
    isAllowedFromServer(): boolean;
    toString(): string;
    name(): "SHOW_TEXT" | "SHOW_ITEM" | "SHOW_ENTITY";
}