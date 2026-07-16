import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCStatsType extends Enum<RTCStatsType> {
    static CANDIDATE_PAIR: RTCStatsType;
    static CERTIFICATE: RTCStatsType;
    static CODEC: RTCStatsType;
    static CSRC: RTCStatsType;
    static DATA_CHANNEL: RTCStatsType;
    static ICE_SERVER: RTCStatsType;
    static INBOUND_RTP: RTCStatsType;
    static LOCAL_CANDIDATE: RTCStatsType;
    static MEDIA_SOURCE: RTCStatsType;
    static OUTBOUND_RTP: RTCStatsType;
    static PEER_CONNECTION: RTCStatsType;
    static RECEIVER: RTCStatsType;
    static REMOTE_CANDIDATE: RTCStatsType;
    static REMOTE_INBOUND_RTP: RTCStatsType;
    static REMOTE_OUTBOUND_RTP: RTCStatsType;
    static SENDER: RTCStatsType;
    static STREAM: RTCStatsType;
    static TRACK: RTCStatsType;
    static TRANSPORT: RTCStatsType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCStatsType;
    static values(): RTCStatsType[];
    private constructor()
    name(): "CODEC" | "INBOUND_RTP" | "OUTBOUND_RTP" | "REMOTE_INBOUND_RTP" | "REMOTE_OUTBOUND_RTP" | "MEDIA_SOURCE" | "CSRC" | "PEER_CONNECTION" | "DATA_CHANNEL" | "STREAM" | "TRACK" | "SENDER" | "RECEIVER" | "TRANSPORT" | "CANDIDATE_PAIR" | "LOCAL_CANDIDATE" | "REMOTE_CANDIDATE" | "CERTIFICATE" | "ICE_SERVER";
}