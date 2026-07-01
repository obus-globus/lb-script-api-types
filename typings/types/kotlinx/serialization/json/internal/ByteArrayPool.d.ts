import type { ByteArrayPoolBase } from '../../../../kotlinx/serialization/json/internal/ByteArrayPoolBase.d.ts'
export class ByteArrayPool extends ByteArrayPoolBase {
    static INSTANCE: ByteArrayPool;
    release(array: number[]): void;
    take(): number[];
}