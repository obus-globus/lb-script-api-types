import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SummaryReporter extends Object {
    constructor(onDeregistration: () => void)
    // private onDeregistration: () => void;
    recordingStopped(result: Path[]): void;
}