import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Task extends Object implements Runnable {
    constructor()
    constructor(submissionTime: number, taskContext: boolean)
    submissionTime: number;
    taskContext: boolean;
}