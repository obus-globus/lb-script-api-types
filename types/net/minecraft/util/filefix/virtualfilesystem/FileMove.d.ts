import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FileMove extends Record {
    static moveCodec(paramfromDirectory: Path[][], paramtoDirectory: Path[][]): Codec<FileMove>;
    constructor(from: Path[], to: Path[])
    // private from: Path[];
    // private to: Path[];
    equals(o: Object | null): boolean;
    from(): Path[];
    hashCode(): number;
    to(): Path[];
    toString(): string;
}