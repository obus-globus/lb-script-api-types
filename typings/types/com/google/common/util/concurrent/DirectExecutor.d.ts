import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DirectExecutor extends Enum<DirectExecutor> implements Executor {
    static INSTANCE: DirectExecutor;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DirectExecutor;
    static values(): DirectExecutor[];
    private constructor()
    execute(command: () => void): void;
    toString(): string;
    name(): "INSTANCE";
}