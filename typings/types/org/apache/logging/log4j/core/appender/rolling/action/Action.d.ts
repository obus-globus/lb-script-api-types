import type { Runnable } from '../../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface Action extends Runnable, Object{
    close(): void;
    execute(): boolean;
    isComplete(): boolean;
    run(): void;
}