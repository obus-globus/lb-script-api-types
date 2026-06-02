import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class SugarPostProcessingExtension$Task extends Object implements Comparable<SugarPostProcessingExtension$Task> {
    constructor(arg0: number, arg1: () => void)
    // private body: () => void;
    // private priority: number;
    compareTo(arg0: SugarPostProcessingExtension$Task): number;
    run(): void;
}