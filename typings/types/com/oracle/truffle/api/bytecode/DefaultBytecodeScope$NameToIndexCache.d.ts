import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DefaultBytecodeScope } from '../../../../../com/oracle/truffle/api/bytecode/DefaultBytecodeScope.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultBytecodeScope$NameToIndexCache extends Object {
    constructor()
    // private lazyValue: JavaMap<string, number>;
    getNameToIndex(scope: DefaultBytecodeScope): JavaMap<string, number>;
    slotToIndex(scope: DefaultBytecodeScope, member: string): number;
}