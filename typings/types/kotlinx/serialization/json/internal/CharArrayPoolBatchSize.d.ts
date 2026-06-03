import type { CharArrayPoolBase } from '../../../../kotlinx/serialization/json/internal/CharArrayPoolBase.d.ts'
export class CharArrayPoolBatchSize extends CharArrayPoolBase {
    static INSTANCE: CharArrayPoolBatchSize;
    release(array: string[]): void;
    take(): string[];
    protected take(size: number): string[];
}