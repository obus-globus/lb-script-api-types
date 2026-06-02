import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectServerSession$CommandPostProcessor extends Object {
    constructor(null_: InspectServerSession$CommandPostProcessor)
    readonly postProcessJob: () => void;
    run(): void;
    setPostProcessJob(postProcessJob: () => void): void;
}