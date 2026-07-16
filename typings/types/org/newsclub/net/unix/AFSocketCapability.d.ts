import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AFSocketCapability extends Enum<AFSocketCapability> {
    static CAPABILITY_ABSTRACT_NAMESPACE: AFSocketCapability;
    static CAPABILITY_ANCILLARY_MESSAGES: AFSocketCapability;
    static CAPABILITY_DARWIN: AFSocketCapability;
    static CAPABILITY_FD_AS_REDIRECT: AFSocketCapability;
    static CAPABILITY_FILE_DESCRIPTORS: AFSocketCapability;
    static CAPABILITY_LARGE_PORTS: AFSocketCapability;
    static CAPABILITY_NATIVE_SOCKETPAIR: AFSocketCapability;
    static CAPABILITY_PEER_CREDENTIALS: AFSocketCapability;
    static CAPABILITY_TIPC: AFSocketCapability;
    static CAPABILITY_UNIX_DATAGRAMS: AFSocketCapability;
    static CAPABILITY_UNIX_DOMAIN: AFSocketCapability;
    static CAPABILITY_UNSAFE: AFSocketCapability;
    static CAPABILITY_VSOCK: AFSocketCapability;
    static CAPABILITY_VSOCK_DGRAM: AFSocketCapability;
    static CAPABILITY_ZERO_LENGTH_SEND: AFSocketCapability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AFSocketCapability;
    static values(): AFSocketCapability[];
    private constructor(arg2: number)
    // private bitmask: number;
    getBitmask(): number;
    name(): "CAPABILITY_PEER_CREDENTIALS" | "CAPABILITY_ANCILLARY_MESSAGES" | "CAPABILITY_FILE_DESCRIPTORS" | "CAPABILITY_ABSTRACT_NAMESPACE" | "CAPABILITY_UNIX_DATAGRAMS" | "CAPABILITY_NATIVE_SOCKETPAIR" | "CAPABILITY_FD_AS_REDIRECT" | "CAPABILITY_TIPC" | "CAPABILITY_UNIX_DOMAIN" | "CAPABILITY_VSOCK" | "CAPABILITY_VSOCK_DGRAM" | "CAPABILITY_ZERO_LENGTH_SEND" | "CAPABILITY_UNSAFE" | "CAPABILITY_LARGE_PORTS" | "CAPABILITY_DARWIN";
}