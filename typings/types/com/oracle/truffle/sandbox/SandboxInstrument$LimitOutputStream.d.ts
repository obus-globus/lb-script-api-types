import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export abstract class SandboxInstrument$LimitOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    private constructor(instrument: SandboxInstrument)
    // private instrument: SandboxInstrument;
    formatErrorMessage(actualCount: number, limit: number): string;
    getCounter(currentContext: SandboxContext): AtomicLong;
    getLimit(currentContext: SandboxContext): number;
    // private incrementAndValidateSize(size: number): void;
    write(arg0: number[]): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}