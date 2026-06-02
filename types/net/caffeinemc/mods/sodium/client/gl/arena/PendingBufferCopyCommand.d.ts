import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PendingBufferCopyCommand extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    readonly length: number;
    readonly readOffset: number;
    readonly writeOffset: number;
    getLength(): number;
    getReadOffset(): number;
    getWriteOffset(): number;
    setLength(arg0: number): void;
}