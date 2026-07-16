import type { ByteArrayDataInput } from '../../../../com/google/common/io/ByteArrayDataInput.d.ts'
import type { ByteArrayDataOutput } from '../../../../com/google/common/io/ByteArrayDataOutput.d.ts'
import type { ByteProcessor } from '../../../../com/google/common/io/ByteProcessor.d.ts'
import type { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.d.ts'
import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ReadableByteChannel } from '../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteStreams extends Object {
    static copy(paramfrom: InputStream, paramto: OutputStream): number;
    static copy(paramfrom: ReadableByteChannel, paramto: WritableByteChannel): number;
    static exhaust(paramin: InputStream): number;
    static limit(paramin: InputStream, paramlimit: number): InputStream;
    static newDataInput(parambytes: number[]): ByteArrayDataInput;
    static newDataInput(parambytes: number[], paramstart: number): ByteArrayDataInput;
    static newDataInput(parambyteArrayInputStream: ByteArrayInputStream): ByteArrayDataInput;
    static newDataOutput(): ByteArrayDataOutput;
    static newDataOutput(paramsize: number): ByteArrayDataOutput;
    static newDataOutput(parambyteArrayOutputStream: ByteArrayOutputStream): ByteArrayDataOutput;
    static nullOutputStream(): OutputStream;
    static read(paramin: InputStream, paramb: number[], paramoff: number, paramlen: number): number;
    static readBytes<T extends unknown>(paraminput: InputStream, paramprocessor: ByteProcessor<T>): T;
    static readFully(paramin: InputStream, paramb: number[]): void;
    static readFully(paramin: InputStream, paramb: number[], paramoff: number, paramlen: number): void;
    static skipFully(paramin: InputStream, paramn: number): void;
    static toByteArray(paramin: InputStream): number[];
    private constructor()
}