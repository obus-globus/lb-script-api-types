import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { ControlFrame } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/ControlFrame.d.ts'
import type { FramedataImpl1 } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/FramedataImpl1.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CloseFrame extends ControlFrame {
    static ABNORMAL_CLOSE: number;
    static BAD_GATEWAY: number;
    static BUGGYCLOSE: number;
    static EXTENSION: number;
    static FLASHPOLICY: number;
    static GOING_AWAY: number;
    static NEVER_CONNECTED: number;
    static NOCODE: number;
    static NORMAL: number;
    static NO_UTF8: number;
    static POLICY_VALIDATION: number;
    static PROTOCOL_ERROR: number;
    static REFUSE: number;
    static SERVICE_RESTART: number;
    static TLS_ERROR: number;
    static TOOBIG: number;
    static TRY_AGAIN_LATER: number;
    static UNEXPECTED_CONDITION: number;
    static get(paramarg0: Opcode): FramedataImpl1;
    constructor()
    readonly code: number;
    readonly reason: string;
    equals(arg0: Object | null): boolean;
    getCloseCode(): number;
    getMessage(): string;
    getPayloadData(): ByteBuffer;
    hashCode(): number;
    isValid(): void;
    setCode(arg0: number): void;
    setPayload(arg0: ByteBuffer): void;
    setReason(arg0: string): void;
    toString(): string;
    // private updatePayload(): void;
    // private validateUtf8(arg0: ByteBuffer, arg1: number): void;
}