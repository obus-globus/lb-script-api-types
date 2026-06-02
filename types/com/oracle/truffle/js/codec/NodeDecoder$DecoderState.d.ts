import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BinaryDecoder } from '../../../../../com/oracle/truffle/js/codec/BinaryDecoder.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeDecoder$DecoderState extends Object {
    constructor(decoder: BinaryDecoder)
    constructor(decoder: BinaryDecoder, arguments: Object[])
    // private arguments: Object[];
    // private decoder: BinaryDecoder;
    // private objRegs: Object[];
    getArgument(index: number): Object;
    getBoolean(): boolean;
    getBuffer(): ByteBuffer;
    getBytecode(): number;
    getDouble(): number;
    getInt(): number;
    getInt32(): number;
    getLong(): number;
    getObjReg(index: number): Object;
    getObject(): Object;
    getReg(): number;
    getString(): TruffleString;
    getUInt(): number;
    hasRemaining(): boolean;
    setObjReg(index: number, value: Object): void;
}