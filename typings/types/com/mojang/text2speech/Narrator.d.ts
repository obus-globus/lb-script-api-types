import type { Object } from '../../../java/lang/Object.d.ts'
export interface Narrator extends Object{
    active(): boolean;
    clear(): void;
    destroy(): void;
    say(arg0: string, arg1: boolean, arg2: number): void;
}