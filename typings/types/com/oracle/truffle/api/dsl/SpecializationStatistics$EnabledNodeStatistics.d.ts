import type { SpecializationStatistics$NodeClassStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$NodeClassStatistics.d.ts'
import type { SpecializationStatistics$NodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$NodeStatistics.d.ts'
import type { SpecializationStatistics$TypeCombination } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$TypeCombination.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpecializationStatistics$EnabledNodeStatistics extends SpecializationStatistics$NodeStatistics {
    static create(paramnode: Node, paramspecializations: (Object | null)[]): SpecializationStatistics$NodeStatistics;
    constructor(node: Node, statistics: SpecializationStatistics$NodeClassStatistics)
    // private nodeRef: WeakReference<Node>;
    // private sourceSection: Object;
    // private specializations: SpecializationStatistics$TypeCombination[];
    acceptExecute(specializationIndex: number, arg0: Class<Object>): void;
    acceptExecute(specializationIndex: number, arg0: Class<Object>, arg1: Class<Object>): void;
    acceptExecute(specializationIndex: number, args: Class<Object>[]): void;
    // private findCombination(specializationIndex: number, args: Class<Object>[]): SpecializationStatistics$TypeCombination;
    getSourceSection(): SourceSection;
    // private insertCombination(specializationIndex: number, args: Class<Object>[]): SpecializationStatistics$TypeCombination;
    isCollected(): boolean;
    resolveValueClass(value: Object): Class<Object>;
}