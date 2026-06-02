import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class FramedataImpl1 extends Object implements Framedata {
    static get(paramarg0: Opcode): FramedataImpl1;
    constructor(arg0: Opcode)
    readonly fin: boolean;
    // private optcode: Opcode;
    // private rsv1: boolean;
    // private rsv2: boolean;
    // private rsv3: boolean;
    readonly transferemasked: boolean;
    // private unmaskedpayload: ByteBuffer;
    append(arg0: Framedata): void;
    equals(arg0: Object | null): boolean;
    getOpcode(): Opcode;
    getPayloadData(): ByteBuffer;
    getTransfereMasked(): boolean;
    hashCode(): number;
    isFin(): boolean;
    isRSV1(): boolean;
    isRSV2(): boolean;
    isRSV3(): boolean;
    isValid(): void;
    setFin(arg0: boolean): void;
    setPayload(arg0: ByteBuffer): void;
    setRSV1(arg0: boolean): void;
    setRSV2(arg0: boolean): void;
    setRSV3(arg0: boolean): void;
    setTransferemasked(arg0: boolean): void;
    toString(): string;
}