import type { Object } from '../../../../java/lang/Object.d.ts'
export class Scanner$State extends Object {
    constructor(position: number, limit: number, line: number)
    // private limit: number;
    line: number;
    position: number;
    getLimit(): number;
    isEmpty(): boolean;
    setLimit(limit: number): void;
}