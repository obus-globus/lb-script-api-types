import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Framedata extends Object{
    append(arg0: Framedata): void;
    getOpcode(): Opcode;
    getPayloadData(): ByteBuffer;
    getTransfereMasked(): boolean;
    isFin(): boolean;
    isRSV1(): boolean;
    isRSV2(): boolean;
    isRSV3(): boolean;
}