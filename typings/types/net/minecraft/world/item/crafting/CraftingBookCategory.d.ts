import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CraftingBookCategory extends Enum<CraftingBookCategory> implements StringRepresentable {
    static BUILDING: CraftingBookCategory;
    static BY_ID: (param0: number) => CraftingBookCategory;
    static CODEC: Codec<CraftingBookCategory>;
    static EQUIPMENT: CraftingBookCategory;
    static MISC: CraftingBookCategory;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static REDSTONE: CraftingBookCategory;
    static STREAM_CODEC: StreamCodec<ByteBuf, CraftingBookCategory>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CraftingBookCategory;
    static values(): CraftingBookCategory[];
    private constructor(name: string, id: number)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    // private id(): number;
    name(): "BUILDING" | "REDSTONE" | "EQUIPMENT" | "MISC";
}