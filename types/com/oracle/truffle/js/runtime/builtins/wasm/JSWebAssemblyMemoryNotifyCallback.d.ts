import type { TruffleObject } from '../../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssemblyMemoryNotifyCallback extends Object implements TruffleObject {
    constructor(realm: JSRealm, context: JSContext)
    // private context: JSContext;
    // private realm: JSRealm;
    execute(arguments: Object[]): Object;
    isExecutable(): boolean;
}