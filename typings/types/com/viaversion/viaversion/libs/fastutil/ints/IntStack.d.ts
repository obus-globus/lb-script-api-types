import type { Stack } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Stack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntStack extends Stack<number>, Object{
    peek(arg0: number): number;
    peekInt(arg0: number): number;
    pop(): number;
    popInt(): number;
    push(arg0: number): void;
    top(): number;
    topInt(): number;
}