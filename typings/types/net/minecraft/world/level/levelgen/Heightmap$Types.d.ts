import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Heightmap$Usage } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Usage.d.ts'
export class Heightmap$Types extends Enum<Heightmap$Types> implements StringRepresentable {
    static CODEC: Codec<Heightmap$Types>;
    static MOTION_BLOCKING: Heightmap$Types;
    static MOTION_BLOCKING_NO_LEAVES: Heightmap$Types;
    static OCEAN_FLOOR: Heightmap$Types;
    static OCEAN_FLOOR_WG: Heightmap$Types;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Heightmap$Types>;
    static WORLD_SURFACE: Heightmap$Types;
    static WORLD_SURFACE_WG: Heightmap$Types;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Heightmap$Types;
    static values(): Heightmap$Types[];
    private constructor(id: number, serializationKey: string, usage: Heightmap$Usage, isOpaque: (param0: BlockState) => boolean)
    // private id: number;
    // private isOpaque: (param0: BlockState) => boolean;
    readonly serializationKey: string;
    // private usage: Heightmap$Usage;
    getSerializationKey(): string;
    getSerializedName(): string;
    isOpaque(): (param0: BlockState) => boolean;
    keepAfterWorldgen(): boolean;
    sendToClient(): boolean;
    name(): "WORLD_SURFACE_WG" | "WORLD_SURFACE" | "OCEAN_FLOOR_WG" | "OCEAN_FLOOR" | "MOTION_BLOCKING" | "MOTION_BLOCKING_NO_LEAVES";
}