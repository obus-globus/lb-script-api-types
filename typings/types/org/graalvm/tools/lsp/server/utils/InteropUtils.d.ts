import type { TruffleLogger } from '../../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropUtils extends Object {
    static getNodeObjectVariables(paramnode: InstrumentableNode): (Object | null)[];
    static getNumberOfArguments(paramnodeObject: Object, paramlogger: TruffleLogger): number;
    static isPrimitive(paramobject: Object): boolean;
    private constructor()
}