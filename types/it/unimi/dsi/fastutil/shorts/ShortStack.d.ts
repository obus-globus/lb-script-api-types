import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortStack extends Stack<number>, Object{
    peek<K extends Object | number | string | boolean>(arg0: number): K;
    peek(arg0: number): number;
    peekShort(arg0: number): number;
    pop(): number;
    popShort(): number;
    push(arg0: number): void;
    push(arg0: number): void;
    top<K extends Object | number | string | boolean>(): K;
    top(): number;
    topShort(): number;
}