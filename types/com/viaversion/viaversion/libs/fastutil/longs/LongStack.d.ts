import type { Stack } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Stack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LongStack extends Stack<number>, Object{
    peek<K extends Object | number | string | boolean>(arg0: number): K;
    peek(arg0: number): number;
    peekLong(arg0: number): number;
    pop(): number;
    popLong(): number;
    push(arg0: number): void;
    push(arg0: number): void;
    top<K extends Object | number | string | boolean>(): K;
    top(): number;
    topLong(): number;
}