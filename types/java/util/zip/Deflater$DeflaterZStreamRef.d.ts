import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Cleaner$Cleanable } from '../../../java/lang/ref/Cleaner$Cleanable.d.ts'
import type { Deflater } from '../../../java/util/zip/Deflater.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Deflater$DeflaterZStreamRef extends Object implements Runnable {
    private constructor(arg0: Deflater, arg1: number)
    // private address: number;
    // private cleanable: Cleaner$Cleanable;
    address(): number;
    clean(): void;
    run(): void;
}