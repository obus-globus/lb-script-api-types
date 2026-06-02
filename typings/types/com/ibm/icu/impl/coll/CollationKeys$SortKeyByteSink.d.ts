import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CollationKeys$SortKeyByteSink extends Object {
    constructor(arg0: number[])
    // private appended_: number;
    // private buffer_: number[];
    Append(arg0: number[], arg1: number): void;
    Append(arg0: number): void;
    AppendBeyondCapacity(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    GetRemainingCapacity(): number;
    NumberOfBytesAppended(): number;
    Overflowed(): boolean;
    Resize(arg0: number, arg1: number): boolean;
    setBufferAndAppended(arg0: number[], arg1: number): void;
}