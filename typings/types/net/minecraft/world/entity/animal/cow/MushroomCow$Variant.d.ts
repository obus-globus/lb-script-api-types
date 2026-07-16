import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MushroomCow$Variant extends Enum<MushroomCow$Variant> implements StringRepresentable {
    static BROWN: MushroomCow$Variant;
    static CODEC: Codec<MushroomCow$Variant>;
    static DEFAULT: MushroomCow$Variant;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RED: MushroomCow$Variant;
    static STREAM_CODEC: StreamCodec<ByteBuf, MushroomCow$Variant>;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MushroomCow$Variant;
    static values(): MushroomCow$Variant[];
    private constructor(type: string, id: number, blockState: BlockState)
    readonly blockState: BlockState;
    // private id: number;
    // private type: string;
    getBlockState(): BlockState;
    getSerializedName(): string;
    // private id(): number;
    name(): "RED" | "BROWN";
}