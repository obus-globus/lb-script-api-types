import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class WeatheringCopper$WeatherState extends Enum<WeatheringCopper$WeatherState> implements StringRepresentable {
    static BY_ID: (param0: number) => WeatheringCopper$WeatherState;
    static CODEC: Codec<WeatheringCopper$WeatherState>;
    static EXPOSED: WeatheringCopper$WeatherState;
    static OXIDIZED: WeatheringCopper$WeatherState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, WeatheringCopper$WeatherState>;
    static UNAFFECTED: WeatheringCopper$WeatherState;
    static WEATHERED: WeatheringCopper$WeatherState;
    static forEach(paramconsumer: (param0: WeatheringCopper$WeatherState) => void): void;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WeatheringCopper$WeatherState;
    static values(): WeatheringCopper$WeatherState[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    next(): WeatheringCopper$WeatherState;
    previous(): WeatheringCopper$WeatherState;
    name(): "UNAFFECTED" | "EXPOSED" | "WEATHERED" | "OXIDIZED";
}