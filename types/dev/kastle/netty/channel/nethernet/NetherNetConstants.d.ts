import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NetherNetConstants extends Object {
    static APPLICATION_ID: number;
    static DISCOVERY_PORT: number;
    static ID_DISCOVERY_MESSAGE: number;
    static ID_DISCOVERY_REQUEST: number;
    static ID_DISCOVERY_RESPONSE: number;
    static MAX_SCTP_MESSAGE_SIZE: number;
    static RELIABLE_CHANNEL_LABEL: string;
    static RTC_NEGOTIATION_CANDIDATE_ADD: string;
    static RTC_NEGOTIATION_CONNECT_ERROR: string;
    static RTC_NEGOTIATION_CONNECT_REQUEST: string;
    static RTC_NEGOTIATION_CONNECT_RESPONSE: string;
    static SIGNALING_USER_AGENT: string;
    static UNRELIABLE_CHANNEL_LABEL: string;
    static XBOX_RPC_INNER_METHOD_DELIVERY: string;
    static XBOX_RPC_INNER_METHOD_WEBRTC: string;
    static XBOX_RPC_METHOD_PING: string;
    static XBOX_RPC_METHOD_PONG: string;
    static XBOX_RPC_METHOD_RECEIVE_MESSAGE: string;
    static XBOX_RPC_METHOD_SEND_MESSAGE: string;
    static XBOX_RPC_METHOD_TURN_AUTH: string;
    static XBOX_SIGNAL_ACCEPTED: number;
    static XBOX_SIGNAL_ACK: number;
    static XBOX_SIGNAL_CREDENTIALS: number;
    static XBOX_SIGNAL_NOT_FOUND: number;
    static XBOX_SIGNAL_SIGNAL: number;
    static buildSignalCandidateAdd(paramarg0: number, paramarg1: string): string;
    static buildSignalConnectRequest(paramarg0: number, paramarg1: string): string;
    static buildSignalConnectResponse(paramarg0: number, paramarg1: string): string;
    static decryptDiscoveryPacket(paramarg0: ByteBuf): ByteBuf;
    static encryptDiscoveryPacket(paramarg0: ByteBuf): number[];
    constructor()
}