import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleStack extends Stack<number>, Object{
    peek(arg0: number): number;
    peekDouble(arg0: number): number;
    pop(): number;
    popDouble(): number;
    push(arg0: number): void;
    top(): number;
    topDouble(): number;
}