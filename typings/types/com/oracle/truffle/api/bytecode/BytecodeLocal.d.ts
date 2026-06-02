import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BytecodeLocal extends Object {
    constructor(token: Object)
    getLocalIndex(): number;
    getLocalOffset(): number;
}