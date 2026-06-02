import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class AttributeModifier$Operation extends Enum<AttributeModifier$Operation> implements StringRepresentable {
    static ADD_MULTIPLIED_BASE: AttributeModifier$Operation;
    static ADD_MULTIPLIED_TOTAL: AttributeModifier$Operation;
    static ADD_VALUE: AttributeModifier$Operation;
    static BY_ID: (param0: AttributeModifier$Operation) => unknown;
    static CODEC: Codec<AttributeModifier$Operation>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, AttributeModifier$Operation>;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AttributeModifier$Operation;
    static values(): (Object | null)[];
    private constructor(name: string, id: number)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    id(): number;
    name(): "ADD_VALUE" | "ADD_MULTIPLIED_BASE" | "ADD_MULTIPLIED_TOTAL";
}