import type { Object } from '../../../java/lang/Object.d.ts'
export interface Progress extends Object{
    end(): void;
    increment(arg0: number): void;
    reset(arg0: string, arg1: number): void;
    reset(arg0: string, arg1: number, arg2: string): void;
    start(arg0: number): void;
    update(arg0: number): void;
    update(arg0: number, arg1: string): void;
}