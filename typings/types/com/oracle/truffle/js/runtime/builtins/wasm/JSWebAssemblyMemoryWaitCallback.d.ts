import type { TruffleObject } from '../../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayBufferObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssemblyMemoryWaitCallback extends Object implements TruffleObject {
    constructor(realm: JSRealm, context: JSContext)
    // private context: JSContext;
    // private realm: JSRealm;
    // private atomicsWait(buffer: JSArrayBufferObject, address: number, expected: number, timeout: number, is64: boolean): TruffleString;
    execute(arguments: Object[]): Object;
    isExecutable(): boolean;
}