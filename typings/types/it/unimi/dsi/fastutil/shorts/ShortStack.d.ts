import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortStack extends Stack<number>, Object{
    peek(arg0: number): number;
    peekShort(arg0: number): number;
    pop(): number;
    popShort(): number;
    push(arg0: number): void;
    top(): number;
    topShort(): number;
}