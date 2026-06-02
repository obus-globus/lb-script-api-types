import type { StreamingXXHash64 } from '../../../net/jpountz/xxhash/StreamingXXHash64.d.ts'
export class StreamingXXHash64JNI extends StreamingXXHash64 {
    constructor(arg0: number)
    // private state: number;
    // private checkState(): void;
    close(): void;
    finalize(): void;
    getValue(): number;
    reset(): void;
    update(arg0: number[], arg1: number, arg2: number): void;
}