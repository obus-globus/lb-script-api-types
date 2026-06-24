import type { NativeLibrariesBootstrap$CapturingStream } from '../../../../com/mojang/blaze3d/platform/NativeLibrariesBootstrap$CapturingStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
export class NativeLibrariesBootstrap$CapturingPrintStream extends PrintStream {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    // private collector: NativeLibrariesBootstrap$CapturingStream;
    startCapturing(): void;
    stopCapturing(): string;
}