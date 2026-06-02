import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Sniffer$State extends Enum<Sniffer$State> {
    static BY_ID: (param0: Sniffer$State) => unknown;
    static DIGGING: Sniffer$State;
    static FEELING_HAPPY: Sniffer$State;
    static IDLING: Sniffer$State;
    static RISING: Sniffer$State;
    static SCENTING: Sniffer$State;
    static SEARCHING: Sniffer$State;
    static SNIFFING: Sniffer$State;
    static STREAM_CODEC: StreamCodec<ByteBuf, Sniffer$State>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Sniffer$State;
    static values(): (Object | null)[];
    private constructor(id: number)
    // private id: number;
    id(): number;
    name(): "IDLING" | "FEELING_HAPPY" | "SCENTING" | "SNIFFING" | "SEARCHING" | "DIGGING" | "RISING";
}