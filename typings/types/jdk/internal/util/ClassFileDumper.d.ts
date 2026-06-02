import type { Class } from '../../../java/lang/Class.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassFileDumper extends Object {
    static getInstance(paramarg0: string, paramarg1: string): ClassFileDumper;
    private constructor(arg0: string, arg1: string)
    // private counter: AtomicInteger;
    // private dumpDir: string;
    readonly enabled: boolean;
    // private key: string;
    dumpClass(arg0: string, arg1: Class<Object>, arg2: number[]): void;
    dumpFailedClass(arg0: string, arg1: number[]): void;
    isEnabled(): boolean;
    key(): string;
    // private pathname(arg0: string): Path[];
    // private write(arg0: Path[], arg1: number[]): void;
}