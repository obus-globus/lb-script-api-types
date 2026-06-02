import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class SwingAnimationType extends Enum<SwingAnimationType> implements StringRepresentable {
    static CODEC: Codec<SwingAnimationType>;
    static NONE: SwingAnimationType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STAB: SwingAnimationType;
    static STREAM_CODEC: StreamCodec<ByteBuf, SwingAnimationType>;
    static WHACK: SwingAnimationType;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SwingAnimationType;
    static values(): (Object | null)[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private name: string;
    getId(): number;
    getSerializedName(): string;
    name(): "NONE" | "WHACK" | "STAB";
}