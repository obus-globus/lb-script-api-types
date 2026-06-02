import type { Object } from '../../../java/lang/Object.d.ts'
export class Classifications$Classification extends Object {
    constructor(arg0: string, arg1: number)
    readonly className: string;
    readonly probability: number;
    getClassName(): string;
    getProbability(): number;
    toString(): string;
}