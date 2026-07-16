import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSTextDecoderObject } from '../../../../../../com/oracle/truffle/js/builtins/web/JSTextDecoderObject.d.ts'
import type { TextDecoderBuiltins$DecodeBufferSlice } from '../../../../../../com/oracle/truffle/js/builtins/web/TextDecoderBuiltins$DecodeBufferSlice.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
export class TextDecoderBuiltinsFactory$DecodeBufferSliceNodeGen extends TextDecoderBuiltins$DecodeBufferSlice {
    static create(): TextDecoderBuiltins$DecodeBufferSlice;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private arrayBufferInterop_interop_: InteropLibrary;
    // private state_0_: number;
    execute(arg0Value: JSTextDecoderObject, arg1Value: JSArrayBufferObject, arg2Value: number, arg3Value: number, arg4Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: JSTextDecoderObject, arg1Value: JSArrayBufferObject, arg2Value: number, arg3Value: number, arg4Value: boolean): TruffleString;
}