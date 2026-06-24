import type { OutputHandler$ListeneableOutputStream } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler$ListeneableOutputStream.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OutputHandler$ListeneableOutputStream$RBCH extends Object implements ReadableByteChannel {
    private constructor(null_: OutputHandler$ListeneableOutputStream)
    // private b: number[];
    // private len: number;
    // private off: number;
    close(): void;
    isEmpty(): boolean;
    isOpen(): boolean;
    put(b: number[]): void;
    put(b: number[], off: number, len: number): void;
    put(b: number): void;
    read(dst: ByteBuffer): number;
}