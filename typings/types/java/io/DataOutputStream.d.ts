import type { DataOutput } from '../../java/io/DataOutput.d.ts'
import type { FilterOutputStream } from '../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
export class DataOutputStream extends FilterOutputStream implements DataOutput {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    // private bytearr: number[];
    // private writeBuffer: number[];
    // private written: number;
    flush(): void;
    // private incCount(arg0: number): void;
    size(): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeBytes(arg0: string): void;
    writeChar(arg0: number): void;
    writeChars(arg0: string): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeShort(arg0: number): void;
    writeUTF(arg0: string): void;
}