import type { TruffleObject } from '../../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssemblyMemoryGrowCallback extends Object implements TruffleObject {
    constructor(realm: JSRealm)
    // private realm: JSRealm;
    execute(arguments: Object[]): Object;
    isExecutable(): boolean;
}