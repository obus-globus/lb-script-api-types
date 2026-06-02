import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { DataOutputStream } from '../../java/io/DataOutputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectOutputStream$BlockDataOutputStream extends OutputStream implements DataOutput {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    // private blkmode: boolean;
    // private buf: number[];
    // private cbuf: string[];
    // private dout: DataOutputStream;
    // private hbuf: number[];
    // private out: OutputStream;
    // private pos: number;
    close(): void;
    drain(): void;
    flush(): void;
    getBlockDataMode(): boolean;
    setBlockDataMode(arg0: boolean): boolean;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number[], arg1: number, arg2: number, arg3: boolean): void;
    write(arg0: number): void;
    // private writeBlockHeader(arg0: number): void;
    writeBoolean(arg0: boolean): void;
    writeBooleans(arg0: (Object | null)[], arg1: number, arg2: number): void;
    writeByte(arg0: number): void;
    writeBytes(arg0: string): void;
    writeBytes(arg0: string, arg1: number): void;
    writeChar(arg0: number): void;
    writeChars(arg0: string[], arg1: number, arg2: number): void;
    writeChars(arg0: string): void;
    writeDouble(arg0: number): void;
    writeDoubles(arg0: number[], arg1: number, arg2: number): void;
    writeFloat(arg0: number): void;
    writeFloats(arg0: number[], arg1: number, arg2: number): void;
    writeInt(arg0: number): void;
    writeInts(arg0: number[], arg1: number, arg2: number): void;
    writeLong(arg0: number): void;
    writeLongs(arg0: number[], arg1: number, arg2: number): void;
    // private writeMoreUTF(arg0: string, arg1: number): void;
    writeShort(arg0: number): void;
    writeShorts(arg0: number[], arg1: number, arg2: number): void;
    writeUTF(arg0: string): void;
    // private writeUTFInternal(arg0: string, arg1: boolean): void;
}