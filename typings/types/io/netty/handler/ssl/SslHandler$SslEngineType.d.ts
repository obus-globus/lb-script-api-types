import type { SslHandler$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { SslHandler } from '../../../../io/netty/handler/ssl/SslHandler.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SSLEngine } from '../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLEngineResult } from '../../../../javax/net/ssl/SSLEngineResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SslHandler$SslEngineType extends Enum<SslHandler$SslEngineType> {
    static CONSCRYPT: SslHandler$SslEngineType;
    static JDK: SslHandler$SslEngineType;
    static TCNATIVE: SslHandler$SslEngineType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SslHandler$SslEngineType;
    static values(): (Object | null)[];
    private constructor(arg2: boolean, arg3: ByteToMessageDecoder$Cumulator)
    constructor(arg2: boolean, arg3: ByteToMessageDecoder$Cumulator, arg4: SslHandler$1)
    // private cumulator: ByteToMessageDecoder$Cumulator;
    // private wantsDirectBuffer: boolean;
    allocateWrapBuffer(arg0: SslHandler, arg1: ByteBufAllocator, arg2: number, arg3: number): ByteBuf;
    calculatePendingData(arg0: SslHandler, arg1: number): number;
    calculateRequiredOutBufSpace(arg0: SslHandler, arg1: number, arg2: number): number;
    jdkCompatibilityMode(arg0: SSLEngine): boolean;
    unwrap(arg0: SslHandler, arg1: ByteBuf, arg2: number, arg3: ByteBuf): SSLEngineResult;
    name(): "TCNATIVE" | "CONSCRYPT" | "JDK";
}