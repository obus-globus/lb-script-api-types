import type { ZlibDecoder } from '../../../../../io/netty/handler/codec/compression/ZlibDecoder.d.ts'
import type { ZlibEncoder } from '../../../../../io/netty/handler/codec/compression/ZlibEncoder.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZlibCodecFactory extends Object {
    static isSupportingWindowSizeAndMemLevel(): boolean;
    static newZlibDecoder(): ZlibDecoder;
    static newZlibDecoder(paramarg0: number[]): ZlibDecoder;
    static newZlibDecoder(paramarg0: number[], paramarg1: number): ZlibDecoder;
    static newZlibDecoder(paramarg0: number): ZlibDecoder;
    static newZlibDecoder(paramarg0: ZlibWrapper): ZlibDecoder;
    static newZlibDecoder(paramarg0: ZlibWrapper, paramarg1: number): ZlibDecoder;
    static newZlibEncoder(paramarg0: number[]): ZlibEncoder;
    static newZlibEncoder(paramarg0: number): ZlibEncoder;
    static newZlibEncoder(paramarg0: number, paramarg1: number[]): ZlibEncoder;
    static newZlibEncoder(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): ZlibEncoder;
    static newZlibEncoder(paramarg0: ZlibWrapper): ZlibEncoder;
    static newZlibEncoder(paramarg0: ZlibWrapper, paramarg1: number): ZlibEncoder;
    static newZlibEncoder(paramarg0: ZlibWrapper, paramarg1: number, paramarg2: number, paramarg3: number): ZlibEncoder;
    private constructor()
}