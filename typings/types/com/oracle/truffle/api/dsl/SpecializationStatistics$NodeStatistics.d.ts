import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SpecializationStatistics$NodeStatistics extends Object {
    static create(paramnode: Node, paramspecializations: string[]): SpecializationStatistics$NodeStatistics;
    constructor()
    acceptExecute(specializationIndex: number, arg0: Class<Object>): void;
    acceptExecute(specializationIndex: number, arg0: Class<Object>, arg1: Class<Object>): void;
    acceptExecute(specializationIndex: number, ...args: Class<Object>[]): void;
    resolveValueClass(value: Object): Class<Object>;
}