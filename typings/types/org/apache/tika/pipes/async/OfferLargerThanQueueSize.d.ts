import type { IllegalArgumentException } from '../../../../../java/lang/IllegalArgumentException.d.ts'
export class OfferLargerThanQueueSize extends IllegalArgumentException {
    constructor(arg0: number, arg1: number)
    readonly message: string | null;
    readonly queueSize: number;
    readonly sizeOffered: number;
    getQueueSize(): number;
    getSizeOffered(): number;
}