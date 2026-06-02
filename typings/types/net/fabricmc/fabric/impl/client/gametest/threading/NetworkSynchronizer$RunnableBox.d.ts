import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NetworkSynchronizer$RunnableBox extends Record {
    private constructor(runnable: () => void)
    // private runnable: () => void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    runnable(): () => void;
    toString(): string;
}