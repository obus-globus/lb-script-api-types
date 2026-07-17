import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { SpecializationStatistics$EnabledNodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$EnabledNodeStatistics.d.ts'
import type { SpecializationStatistics$IntStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$IntStatistics.d.ts'
import type { SpecializationStatistics$TypeCombination } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$TypeCombination.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpecializationStatistics$NodeClassHistogram extends Object {
    constructor(nodeClass: Class<Object>, specializationNames: string[])
    // private nodeClass: Class<Object>;
    // private nodeStat: SpecializationStatistics$IntStatistics;
    // private specializationCombinationStat: JavaMap<BitSet, SpecializationStatistics$IntStatistics[]>;
    // private specializationCombinationSumStat: JavaMap<BitSet, SpecializationStatistics$IntStatistics>;
    // private specializationNames: string[];
    // private specializationStat: SpecializationStatistics$IntStatistics[];
    // private typeCombinationStat: JavaMap<SpecializationStatistics$TypeCombination, SpecializationStatistics$IntStatistics>[];
    accept(statistics: SpecializationStatistics$EnabledNodeStatistics): void;
    combine(nodeClassStatistics: SpecializationStatistics$NodeClassHistogram): void;
    // private getDisplayName(): string;
    // private getLabelWidth(): number;
    getNodeClass(): Class<Object>;
    getNodeStat(): SpecializationStatistics$IntStatistics;
    getSpecializationNames(): string[];
    print(stream: PrintWriter, width: number, parentCount: number, parentSum: number): void;
}