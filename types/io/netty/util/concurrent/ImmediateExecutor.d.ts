import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmediateExecutor extends Object implements Executor {
    static INSTANCE: ImmediateExecutor;
    private constructor()
    execute(arg0: () => void): void;
}