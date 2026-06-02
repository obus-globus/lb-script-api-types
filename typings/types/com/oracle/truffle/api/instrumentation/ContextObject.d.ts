import type { AllocationReporter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationReporter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContextObject extends Object {
    constructor(reporter: AllocationReporter)
    readonly reporter: AllocationReporter;
    getReporter(): AllocationReporter;
}