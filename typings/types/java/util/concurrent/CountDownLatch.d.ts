import type { CountDownLatch$Sync } from '../../../java/util/concurrent/CountDownLatch$Sync.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CountDownLatch extends Object {
    constructor(arg0: number)
    // private sync: CountDownLatch$Sync;
    await(): void;
    await(arg0: number, arg1: TimeUnit): boolean;
    countDown(): void;
    getCount(): number;
    toString(): string;
}