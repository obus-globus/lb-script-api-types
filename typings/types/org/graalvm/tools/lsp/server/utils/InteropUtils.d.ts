import type { TruffleLogger } from '../../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InteropUtils$VariableInfo } from '../../../../../../org/graalvm/tools/lsp/server/utils/InteropUtils$VariableInfo.d.ts'
export class InteropUtils extends Object {
    static getNodeObjectVariables(paramnode: InstrumentableNode): InteropUtils$VariableInfo[];
    static getNumberOfArguments(paramnodeObject: Object, paramlogger: TruffleLogger): number;
    static isPrimitive(paramobject: Object): boolean;
    private constructor()
}