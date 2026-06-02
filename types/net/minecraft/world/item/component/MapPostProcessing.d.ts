import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class MapPostProcessing extends Enum<MapPostProcessing> {
    static ID_MAP: (param0: MapPostProcessing) => unknown;
    static LOCK: MapPostProcessing;
    static SCALE: MapPostProcessing;
    static STREAM_CODEC: StreamCodec<ByteBuf, MapPostProcessing>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MapPostProcessing;
    static values(): (Object | null)[];
    private constructor(id: number)
    // private id: number;
    id(): number;
    name(): "LOCK" | "SCALE";
}