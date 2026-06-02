import type { SpecializationStatistics$EnabledNodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$EnabledNodeStatistics.d.ts'
import type { SpecializationStatistics$NodeClassHistogram } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$NodeClassHistogram.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpecializationStatistics$NodeClassStatistics extends Object {
    constructor(nodeClass: Class<Object>, specializations: string[])
    // private collectedHistogram: SpecializationStatistics$NodeClassHistogram;
    // private nodeCounter: number;
    // private statistics: SpecializationStatistics$EnabledNodeStatistics[];
    createHistogram(): SpecializationStatistics$NodeClassHistogram;
    // private processCollectedStatistics(): void;
}