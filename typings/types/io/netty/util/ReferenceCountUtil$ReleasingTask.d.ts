import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ReferenceCountUtil$ReleasingTask extends Object implements Runnable {
    constructor(arg0: ReferenceCounted, arg1: number)
    // private decrement: number;
    // private obj: ReferenceCounted;
    run(): void;
    toString(): string;
}