import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatStack extends Stack<number>, Object{
    peek(arg0: number): number;
    peekFloat(arg0: number): number;
    pop(): number;
    popFloat(): number;
    push(arg0: number): void;
    top(): number;
    topFloat(): number;
}