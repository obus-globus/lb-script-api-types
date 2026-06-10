import type { Stack } from '../../../../../it/unimi/dsi/fastutil/Stack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharStack extends Stack<string>, Object{
    peek(arg0: number): string;
    peekChar(arg0: number): string;
    pop(): string;
    popChar(): string;
    push(arg0: string): void;
    top(): string;
    topChar(): string;
}