import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AFUNIXSocketCapability extends Enum<AFUNIXSocketCapability> {
    static CAPABILITY_ABSTRACT_NAMESPACE: AFUNIXSocketCapability;
    static CAPABILITY_ANCILLARY_MESSAGES: AFUNIXSocketCapability;
    static CAPABILITY_DATAGRAMS: AFUNIXSocketCapability;
    static CAPABILITY_FILE_DESCRIPTORS: AFUNIXSocketCapability;
    static CAPABILITY_NATIVE_SOCKETPAIR: AFUNIXSocketCapability;
    static CAPABILITY_PEER_CREDENTIALS: AFUNIXSocketCapability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AFUNIXSocketCapability;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private bitmask: number;
    getBitmask(): number;
    name(): "CAPABILITY_PEER_CREDENTIALS" | "CAPABILITY_ANCILLARY_MESSAGES" | "CAPABILITY_FILE_DESCRIPTORS" | "CAPABILITY_ABSTRACT_NAMESPACE" | "CAPABILITY_DATAGRAMS" | "CAPABILITY_NATIVE_SOCKETPAIR";
}