import type { ByteArrayPoolBase } from '../../../../kotlinx/serialization/json/internal/ByteArrayPoolBase.d.ts'
export class ByteArrayPool8k extends ByteArrayPoolBase {
    static INSTANCE: ByteArrayPool8k;
    release(array: number[]): void;
    take(): number[];
}