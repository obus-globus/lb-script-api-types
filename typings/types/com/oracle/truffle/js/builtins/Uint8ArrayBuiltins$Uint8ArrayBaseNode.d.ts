import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { Uint8ArrayBuiltins$Uint8ArrayBaseNode$EncodeResult } from '../../../../../com/oracle/truffle/js/builtins/Uint8ArrayBuiltins$Uint8ArrayBaseNode$EncodeResult.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSException } from '../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Uint8ArrayBuiltins$Uint8ArrayBaseNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private errorBranch: BranchProfile;
    // private typedArrayLengthNode: TypedArrayLengthNode;
    // private decodeBase64Chunk(chunk: number[], chunkLength: number, bytes: number[], bytesBegin: number, throwOnExtraBits: boolean): number;
    fromBase64(string: TruffleString, base64url: boolean, maxLength: number, lastChunkHandling: TruffleString, charAtNode: TruffleString$ReadCharUTF16Node): Uint8ArrayBuiltins$Uint8ArrayBaseNode$EncodeResult;
    fromHex(string: TruffleString, maxLength: number, charAtNode: TruffleString$ReadCharUTF16Node): Uint8ArrayBuiltins$Uint8ArrayBaseNode$EncodeResult;
    getByteLengthOrThrow(view: JSTypedArrayObject): number;
    getStringOption(opts: Object, key: TruffleString, allowedValues: TruffleString[], defaultValue: TruffleString, getOptionValueNode: PropertyGetNode, equalNode: TruffleString$EqualNode): TruffleString;
    getUint8ArrayBytes(ta: JSTypedArrayObject, interop: InteropLibrary): number[];
    setUint8ArrayBytes(into: JSTypedArrayObject, bytes: number[], resultLength: number): void;
    syntaxError(message: string): JSException;
}