import type { DefaultBytecodeScope } from '../../../../../com/oracle/truffle/api/bytecode/DefaultBytecodeScope.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultBytecodeScope$NameToIndexCache extends Object {
    constructor()
    // private lazyValue: { [key: string]: number };
    getNameToIndex(scope: DefaultBytecodeScope): { [key: string]: number };
    slotToIndex(scope: DefaultBytecodeScope, member: string): number;
}