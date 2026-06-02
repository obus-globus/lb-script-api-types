import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export class ThresholdingOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: ThresholdingOutputStream) => void, arg2: (param0: ThresholdingOutputStream) => OutputStream)
    // private outputStreamGetter: (param0: ThresholdingOutputStream) => OutputStream;
    readonly threshold: number;
    // private thresholdConsumer: (param0: ThresholdingOutputStream) => void;
    readonly thresholdExceeded: boolean;
    // private written: number;
    checkThreshold(arg0: number): void;
    close(): void;
    flush(): void;
    getByteCount(): number;
    getOutputStream(): OutputStream;
    getStream(): OutputStream;
    getThreshold(): number;
    isThresholdExceeded(): boolean;
    resetByteCount(): void;
    setByteCount(arg0: number): void;
    thresholdReached(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}