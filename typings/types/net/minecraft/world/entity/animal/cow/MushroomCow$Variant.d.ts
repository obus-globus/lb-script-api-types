import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MushroomCow$Variant extends Enum<MushroomCow$Variant> implements StringRepresentable {
    static BROWN: MushroomCow$Variant;
    static CODEC: Codec<MushroomCow$Variant>;
    static DEFAULT: MushroomCow$Variant;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RED: MushroomCow$Variant;
    static STREAM_CODEC: StreamCodec<ByteBuf, MushroomCow$Variant>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
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