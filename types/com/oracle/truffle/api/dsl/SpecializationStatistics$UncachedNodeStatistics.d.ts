import type { SpecializationStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics.d.ts'
import type { SpecializationStatistics$EnabledNodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$EnabledNodeStatistics.d.ts'
import type { SpecializationStatistics$NodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$NodeStatistics.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpecializationStatistics$UncachedNodeStatistics extends SpecializationStatistics$NodeStatistics {
    static create(paramnode: Node, paramspecializations: (Object | null)[]): SpecializationStatistics$NodeStatistics;
    constructor(node: Node, specializations: string[])
    // private node: Node;
    // private specializationNames: string[];
    acceptExecute(specializationIndex: number, arg0: Class<Object>): void;
    acceptExecute(specializationIndex: number, arg0: Class<Object>, arg1: Class<Object>): void;
    acceptExecute(specializationIndex: number, args: Class<Object>[]): void;
    // private createUncachedStatistic(statistics: SpecializationStatistics, n: Node): SpecializationStatistics$EnabledNodeStatistics;
    // private lookup(): SpecializationStatistics$NodeStatistics;
    resolveValueClass(value: Object): Class<Object>;
}