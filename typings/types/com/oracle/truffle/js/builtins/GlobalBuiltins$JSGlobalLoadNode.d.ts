import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GlobalBuiltins$JSLoadOperation } from '../../../../../com/oracle/truffle/js/builtins/GlobalBuiltins$JSLoadOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class GlobalBuiltins$JSGlobalLoadNode extends GlobalBuiltins$JSLoadOperation {
    static ARGUMENTS: string;
    static FX_RESOURCES_PATH: string;
    static LOAD_CLASSPATH: string;
    static LOAD_FX: string;
    static LOAD_NASHORN: string;
    static NASHORN_BASE_PATH: string;
    static NASHORN_MOZILLA_COMPAT_JS: string;
    static NASHORN_PARSER_JS: string;
    static RESOURCES_PATH: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    evalImpl(realm: JSRealm, fileName: TruffleString, source: TruffleString, args: Object[]): Object;
    // private evalObjectLiteral(scriptName: Object, scriptSource: Object, args: Object[]): Object;
    // private fileGetPath(scriptObj: Object, interop: InteropLibrary): string;
    loadConvertToString(fileName: Object, args: Object[]): Object;
    loadFile(realm: JSRealm, filePath: string): Object;
    loadFromPath(path: TruffleString, realm: JSRealm, args: Object[]): Object;
    loadScriptObj(scriptObj: JSObject, args: Object[]): Object;
    loadString(path: TruffleString, args: Object[]): Object;
    loadTruffleObject(scriptObj: Object, args: Object[], interop: InteropLibrary): Object;
    loadURL(realm: JSRealm, url: URL): Object;
}