import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { ObjectOutput } from '../../../../../java/io/ObjectOutput.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectEncoderOutputStream extends OutputStream implements ObjectOutput {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    // private estimatedLength: number;
    // private out: DataOutputStream;
    close(): void;
    flush(): void;
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
    writeObject(arg0: Object): void;
    writeShort(arg0: number): void;
    writeUTF(arg0: string): void;
}