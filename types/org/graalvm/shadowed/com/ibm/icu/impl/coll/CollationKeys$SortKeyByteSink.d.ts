import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class CollationKeys$SortKeyByteSink extends Object {
    constructor(dest: number[])
    // private appended_: number;
    // private buffer_: number[];
    Append(bytes: number[], n: number): void;
    Append(b: number): void;
    AppendBeyondCapacity(bytes: number[], start: number, n: number, length: number): void;
    GetRemainingCapacity(): number;
    NumberOfBytesAppended(): number;
    Overflowed(): boolean;
    Resize(appendCapacity: number, length: number): boolean;
    setBufferAndAppended(dest: number[], app: number): void;
}