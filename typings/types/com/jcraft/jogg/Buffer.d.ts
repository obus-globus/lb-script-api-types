import type { Object } from '../../../java/lang/Object.d.ts'
export class Buffer extends Object {
    static ilog(paramarg0: number): number;
    static report(paramarg0: string): void;
    constructor()
    // private buffer: number[];
    // private endbit: number;
    // private endbyte: number;
    // private ptr: number;
    // private storage: number;
    adv(arg0: number): void;
    adv1(): void;
    bits(): number;
    buffer(): number[];
    bytes(): number;
    look(arg0: number): number;
    look1(): number;
    read(arg0: number[], arg1: number): void;
    read(arg0: number): number;
    read1(): number;
    readB(arg0: number): number;
    readinit(arg0: number[], arg1: number): void;
    readinit(arg0: number[], arg1: number, arg2: number): void;
    reset(): void;
    write(arg0: number[]): void;
    write(arg0: number, arg1: number): void;
    writeclear(): void;
    writeinit(): void;
}