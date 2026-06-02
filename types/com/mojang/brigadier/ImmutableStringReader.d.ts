import type { Object } from '../../../java/lang/Object.d.ts'
export interface ImmutableStringReader extends Object{
    canRead(): boolean;
    canRead(arg0: number): boolean;
    getCursor(): number;
    getRead(): string;
    getRemaining(): string;
    getRemainingLength(): number;
    getString(): string;
    getTotalLength(): number;
    peek(): string;
    peek(arg0: number): string;
}