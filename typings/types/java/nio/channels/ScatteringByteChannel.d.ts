import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ScatteringByteChannel extends ReadableByteChannel, Object{
    close(): void;
    isOpen(): boolean;
    read(arg0: ByteBuffer[]): number;
    read(arg0: ByteBuffer[], arg1: number, arg2: number): number;
}