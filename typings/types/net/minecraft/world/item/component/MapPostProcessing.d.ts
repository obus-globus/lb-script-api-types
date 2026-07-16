import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MapPostProcessing extends Enum<MapPostProcessing> {
    static ID_MAP: (param0: number) => MapPostProcessing;
    static LOCK: MapPostProcessing;
    static SCALE: MapPostProcessing;
    static STREAM_CODEC: StreamCodec<ByteBuf, MapPostProcessing>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MapPostProcessing;
    static values(): MapPostProcessing[];
    private constructor(id: number)
    // private id: number;
    id(): number;
    name(): "LOCK" | "SCALE";
}