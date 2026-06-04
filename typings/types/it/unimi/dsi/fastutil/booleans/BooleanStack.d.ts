import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanStack extends Stack<boolean>, Object{
    peek<K extends Object | number | string | boolean>(arg0: number): K;
    peek(arg0: number): boolean;
    peekBoolean(arg0: number): boolean;
    pop(): boolean;
    popBoolean(): boolean;
    push(arg0: boolean): void;
    top<K extends Object | number | string | boolean>(): K;
    top(): boolean;
    topBoolean(): boolean;
}