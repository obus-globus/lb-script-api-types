import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class FireworkExplosion$Shape extends Enum<FireworkExplosion$Shape> implements StringRepresentable {
    static BURST: FireworkExplosion$Shape;
    static CODEC: Codec<FireworkExplosion$Shape>;
    static CREEPER: FireworkExplosion$Shape;
    static LARGE_BALL: FireworkExplosion$Shape;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SMALL_BALL: FireworkExplosion$Shape;
    static STAR: FireworkExplosion$Shape;
    static STREAM_CODEC: StreamCodec<ByteBuf, FireworkExplosion$Shape>;
    static byId(paramid: number): FireworkExplosion$Shape;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FireworkExplosion$Shape;
    static values(): FireworkExplosion$Shape[];
    private constructor(id: number, name: string)
    readonly id: number;
    getId(): number;
    getName(): MutableComponent;
    getSerializedName(): string;
    name(): "SMALL_BALL" | "LARGE_BALL" | "STAR" | "CREEPER" | "BURST";
}