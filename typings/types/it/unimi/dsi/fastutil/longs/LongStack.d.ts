import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongStack extends Stack<number>, Object{
    peek(arg0: number): number;
    peekLong(arg0: number): number;
    pop(): number;
    popLong(): number;
    push(arg0: number): void;
    top(): number;
    topLong(): number;
}