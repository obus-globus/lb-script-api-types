import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MultiDrawBatch extends Object {
    constructor(arg0: number)
    isFilled: boolean;
    pBaseVertex: number;
    pElementCount: number;
    pElementPointer: number;
    size: number;
    clear(): void;
    delete(): void;
    getIndexBufferSize(): number;
    isEmpty(): boolean;
}