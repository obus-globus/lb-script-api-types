import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class NativeLibrariesBootstrap$CapturingStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    private constructor()
    // private buffer: ByteArrayOutputStream;
    write(arg0: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}