import type { Object } from '../../../java/lang/Object.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
export class BinaryDataReader extends Object {
    constructor(bytes: number[], position: number)
    // private bytes: number[];
    // private position: number;
    readAsciiChar(): string;
    readByte(): number;
    readInt(): number;
    readLong(): number;
    readNullTerminatedUtf8String(fieldSize: number): string;
    readUnsignedByte(): UByte;
    readUtf8String(exactLength: number): string;
    skip(length: number): void;
}