import type { Class } from '../java/lang/Class.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
import type { Protocol$Companion } from '../okhttp3/Protocol$Companion.d.ts'
export class Protocol extends Enum<Protocol> {
    static Companion: Protocol$Companion;
    static H2_PRIOR_KNOWLEDGE: Protocol;
    static HTTP_1_0: Protocol;
    static HTTP_1_1: Protocol;
    static HTTP_2: Protocol;
    static HTTP_3: Protocol;
    static QUIC: Protocol;
    static SPDY_3: Protocol;
    static get(protocol: string): Protocol;
    static getEntries(): Protocol[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Protocol;
    static values(): Protocol[];
    private constructor(protocol: string)
    // private protocol: string;
    toString(): string;
    name(): "HTTP_1_0" | "HTTP_1_1" | "SPDY_3" | "HTTP_2" | "H2_PRIOR_KNOWLEDGE" | "QUIC" | "HTTP_3";
}