import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Unit extends Enum<Unit> {
    static CODEC: Codec<Unit>;
    static INSTANCE: Unit;
    static STREAM_CODEC: StreamCodec<ByteBuf, Unit>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Unit;
    static values(): Unit[];
    private constructor()
    name(): "INSTANCE";
}