import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxContext$TracedLimits extends Record {
    constructor(memory: number, cpu: number, statements: number, stackFrames: number, threads: number, astDepth: number, stdout: number, stderr: number)
    // private astDepth: number;
    // private cpu: number;
    // private memory: number;
    // private stackFrames: number;
    // private statements: number;
    // private stderr: number;
    // private stdout: number;
    // private threads: number;
    astDepth(): number;
    cpu(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    memory(): number;
    print(printWriter: PrintWriter, format: string): void;
    round(): SandboxContext$TracedLimits;
    stackFrames(): number;
    statements(): number;
    stderr(): number;
    stdout(): number;
    threads(): number;
    toString(): string;
}