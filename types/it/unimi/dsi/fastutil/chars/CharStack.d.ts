import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharStack extends Stack<string>, Object{
    peek<K extends Object | number | string | boolean>(arg0: number): K;
    peek(arg0: number): string;
    peekChar(arg0: number): string;
    pop(): string;
    popChar(): string;
    push(arg0: string): void;
    push(arg0: string): void;
    top<K extends Object | number | string | boolean>(): K;
    top(): string;
    topChar(): string;
}