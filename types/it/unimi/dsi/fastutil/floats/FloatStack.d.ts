import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatStack extends Stack<number>, Object{
    peek<K extends Object | number | string | boolean>(arg0: number): K;
    peek(arg0: number): number;
    peekFloat(arg0: number): number;
    pop(): number;
    popFloat(): number;
    push(arg0: number): void;
    push(arg0: number): void;
    top<K extends Object | number | string | boolean>(): K;
    top(): number;
    topFloat(): number;
}