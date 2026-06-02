import type { SpecializationStatistics$EnabledNodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$EnabledNodeStatistics.d.ts'
import type { SpecializationStatistics$NodeClassStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$NodeClassStatistics.d.ts'
import type { SpecializationStatistics$NodeStatistics } from '../../../../../com/oracle/truffle/api/dsl/SpecializationStatistics$NodeStatistics.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpecializationStatistics extends Object {
    static create(): SpecializationStatistics;
    constructor()
    // private classStatistics: Map<Class<Object>, SpecializationStatistics$NodeClassStatistics>;
    // private uncachedStatistics: Map<Node, SpecializationStatistics$EnabledNodeStatistics>;
    // private createCachedNodeStatistic(node: Node, specializations: string[]): SpecializationStatistics$NodeStatistics;
    enter(): SpecializationStatistics;
    // private getClassStatistics(nodeClass: Class<Object>, specializations: string[]): SpecializationStatistics$NodeClassStatistics;
    hasData(): boolean;
    leave(prev: SpecializationStatistics): void;
    printHistogram(stream: PrintStream): void;
    printHistogram(writer: PrintWriter): void;
}