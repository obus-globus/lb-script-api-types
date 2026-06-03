import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { FilterOutputStream } from '../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class LittleEndianDataOutputStream extends FilterOutputStream implements DataOutput {
    static nullOutputStream(): OutputStream;
    constructor(out: OutputStream)
    close(): void;
    write(arg0: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(arg0: number): void;
    writeBoolean(v: boolean): void;
    writeByte(v: number): void;
    writeBytes(s: string): void;
    writeChar(v: number): void;
    writeChars(s: string): void;
    writeDouble(v: number): void;
    writeFloat(v: number): void;
    writeInt(v: number): void;
    writeLong(v: number): void;
    writeShort(v: number): void;
    writeUTF(str: string): void;
}