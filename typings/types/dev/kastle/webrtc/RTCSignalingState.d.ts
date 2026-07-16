import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCSignalingState extends Enum<RTCSignalingState> {
    static CLOSED: RTCSignalingState;
    static HAVE_LOCAL_OFFER: RTCSignalingState;
    static HAVE_LOCAL_PR_ANSWER: RTCSignalingState;
    static HAVE_REMOTE_OFFER: RTCSignalingState;
    static HAVE_REMOTE_PR_ANSWER: RTCSignalingState;
    static STABLE: RTCSignalingState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCSignalingState;
    static values(): RTCSignalingState[];
    private constructor()
    name(): "STABLE" | "HAVE_LOCAL_OFFER" | "HAVE_LOCAL_PR_ANSWER" | "HAVE_REMOTE_OFFER" | "HAVE_REMOTE_PR_ANSWER" | "CLOSED";
}