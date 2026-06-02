import type { DataOutput } from '../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DelegateDataOutput extends Object implements DataOutput {
    constructor(parent: DataOutput)
    // private parent: DataOutput;
    write(b: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
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
    writeUTF(s: string): void;
}