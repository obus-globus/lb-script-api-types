import type { CharArrayPoolBase } from '../../../../kotlinx/serialization/json/internal/CharArrayPoolBase.d.ts'
export class CharArrayPool extends CharArrayPoolBase {
    static INSTANCE: CharArrayPool;
    release(array: string[]): void;
    take(): string[];
}