import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSTextDecoderObject } from '../../../../../../com/oracle/truffle/js/builtins/web/JSTextDecoderObject.d.ts'
import type { TextDecoderBuiltins$DecodeBufferSlice } from '../../../../../../com/oracle/truffle/js/builtins/web/TextDecoderBuiltins$DecodeBufferSlice.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ArrayBufferByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferByteLengthNode.d.ts'
import type { ArrayBufferViewGetByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferViewGetByteLengthNode.d.ts'
import type { GetViewByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/GetViewByteLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { GetBooleanOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetBooleanOptionNode.d.ts'
import type { JSIsNullOrUndefinedNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsNullOrUndefinedNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDataViewObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TextDecoderBuiltins$DecodeNode extends JSBuiltinNode {
    static ARGUMENTS: string;
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
    // private getStreamOption: GetBooleanOptionNode;
    // private isNullOrUndefinedNode: JSIsNullOrUndefinedNode;
    // private isObjectNode: IsObjectNode;
    doArrayBuffer(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject, options: Object, decodeBufferSlice: TextDecoderBuiltins$DecodeBufferSlice, arrayBufferByteLengthNode: ArrayBufferByteLengthNode): TruffleString;
    doDataView(thisObj: JSTextDecoderObject, source: JSDataViewObject, options: Object, decodeBufferSlice: TextDecoderBuiltins$DecodeBufferSlice, getViewByteLengthNode: GetViewByteLengthNode): TruffleString;
    doEmpty(thisObj: JSTextDecoderObject, source: Object, options: Object, decodeBufferSlice: TextDecoderBuiltins$DecodeBufferSlice): TruffleString;
    doTypedArray(thisObj: JSTextDecoderObject, source: JSTypedArrayObject, options: Object, decodeBufferSlice: TextDecoderBuiltins$DecodeBufferSlice, getTypedArrayByteLengthNode: ArrayBufferViewGetByteLengthNode): TruffleString;
    // private getTextDecodeOptions(options: Object): boolean;
    incompatibleReceiver(thisObj: Object, source: Object, options: Object): TruffleString;
}