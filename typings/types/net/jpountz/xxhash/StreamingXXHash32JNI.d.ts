import type { StreamingXXHash32 } from '../../../net/jpountz/xxhash/StreamingXXHash32.d.ts'
export class StreamingXXHash32JNI extends StreamingXXHash32 {
    constructor(arg0: number)
    // private state: number;
    // private checkState(): void;
    close(): void;
    finalize(): void;
    getValue(): number;
    reset(): void;
    update(arg0: number[], arg1: number, arg2: number): void;
}