import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteStack extends Stack<number>, Object{
    peek(arg0: number): number;
    peekByte(arg0: number): number;
    pop(): number;
    popByte(): number;
    push(arg0: number): void;
    top(): number;
    topByte(): number;
}