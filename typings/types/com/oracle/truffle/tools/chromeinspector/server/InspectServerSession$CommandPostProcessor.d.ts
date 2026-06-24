import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectServerSession$CommandPostProcessor extends Object {
    constructor(null_: InspectServerSession)
    readonly postProcessJob: () => void;
    run(): void;
    setPostProcessJob(postProcessJob: () => void): void;
}