import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalJsonWriter extends Object{
    release(): void;
    write(text: string): void;
    writeChar(char: string): void;
    writeLong(value: number): void;
    writeQuoted(text: string): void;
}