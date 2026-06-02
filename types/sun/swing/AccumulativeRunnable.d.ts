import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AccumulativeRunnable<T extends Object | number | string | boolean> extends Object implements Runnable {
    constructor()
    // private arguments: T[];
    add(arg0: T[]): void;
    // private flush(): T[];
    run(): void;
    run(arg0: T[]): void;
    submit(): void;
}