import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteLengthOfCodePointNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteLengthOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromByteArrayNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromByteArrayNode.d.ts'
import type { TruffleString$IsValidNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$IsValidNode.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { TruffleString$ToValidStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToValidStringNode.d.ts'
import type { JSTextDecoderObject } from '../../../../../../com/oracle/truffle/js/builtins/web/JSTextDecoderObject.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayBufferObject$Direct } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Direct.d.ts'
import type { JSArrayBufferObject$Heap } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Heap.d.ts'
import type { JSArrayBufferObject$Interop } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Interop.d.ts'
import type { JSArrayBufferObject$Shared } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Shared.d.ts'
export abstract class TextDecoderBuiltins$DecodeBufferSlice extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private byteLengthOfCodePointNode: TruffleString$ByteLengthOfCodePointNode;
    // private fromByteArrayNode: TruffleString$FromByteArrayNode;
    // private isValidNode: TruffleString$IsValidNode;
    // private switchEncodingNode: TruffleString$SwitchEncodingNode;
    // private toValidNode: TruffleString$ToValidStringNode;
    // private decodeBufferSlice(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject, byteOffset: number, byteLength: number, stream: boolean, interop: InteropLibrary, utf16Branch: InlinedBranchProfile): TruffleString;
    doArrayBufferDirect(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject$Direct, byteOffset: number, byteLength: number, stream: boolean, utf16Branch: InlinedBranchProfile): TruffleString;
    doArrayBufferHeap(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject$Heap, byteOffset: number, byteLength: number, stream: boolean, utf16Branch: InlinedBranchProfile): TruffleString;
    doArrayBufferInterop(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject$Interop, byteOffset: number, byteLength: number, stream: boolean, interop: InteropLibrary, utf16Branch: InlinedBranchProfile): TruffleString;
    doArrayBufferShared(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject$Shared, byteOffset: number, byteLength: number, stream: boolean, utf16Branch: InlinedBranchProfile): TruffleString;
    execute(thisObj: JSTextDecoderObject, buffer: JSArrayBufferObject, byteOffset: number, byteLength: number, stream: boolean): TruffleString;
    // private stringFromByteArrayUTF16(thisObj: JSTextDecoderObject, bytes: number[], stream: boolean, sourceEncoding: TruffleString$Encoding): TruffleString;
    // private stringFromByteArrayUTF8(thisObj: JSTextDecoderObject, bytes: number[], stream: boolean): TruffleString;
    // private toValidUTF16String(thisObj: JSTextDecoderObject, utf8Str: TruffleString, sourceEncoding: TruffleString$Encoding): TruffleString;
}