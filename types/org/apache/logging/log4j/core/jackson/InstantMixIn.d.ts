import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InstantMixIn extends Object {
    constructor(epochSecond: number, nanoOfSecond: number)
    getEpochSecond(): number;
    getNanoOfSecond(): number;
}