import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { WebAssemblyBuiltins$WebAssembly } from '../../../../../../com/oracle/truffle/js/builtins/wasm/WebAssemblyBuiltins$WebAssembly.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteSequence } from '../../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class WebAssemblyBuiltins extends JSBuiltinsContainer$SwitchEnum<WebAssemblyBuiltins$WebAssembly> {
    static BUILTINS: JSBuiltinsContainer;
    static buildSource(parambyteSource: ByteSequence): Source;
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    static moduleDecode(paramrealm: JSRealm, paramwasmSource: Source): Object;
    constructor()
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean, builtinEnum: WebAssemblyBuiltins$WebAssembly): Object;
}