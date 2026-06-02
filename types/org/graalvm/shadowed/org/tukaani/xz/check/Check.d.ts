import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Check extends Object {
    static getInstance(paramcheckType: number): Check;
    constructor()
    name: string;
    size: number;
    finish(): number[];
    getName(): string;
    getSize(): number;
    update(buf: number[]): void;
    update(buf: number[], off: number, len: number): void;
}