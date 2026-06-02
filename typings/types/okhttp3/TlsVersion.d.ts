import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Enum } from '../java/lang/Enum.d.ts'
import type { TlsVersion$Companion } from '../okhttp3/TlsVersion$Companion.d.ts'
export class TlsVersion extends Enum<TlsVersion> {
    static Companion: TlsVersion$Companion;
    static SSL_3_0: TlsVersion;
    static TLS_1_0: TlsVersion;
    static TLS_1_1: TlsVersion;
    static TLS_1_2: TlsVersion;
    static TLS_1_3: TlsVersion;
    static forJavaName(paramarg0: string): TlsVersion;
    static getEntries(): TlsVersion[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TlsVersion;
    static values(): (Object | null)[];
    private constructor(javaName: string)
    // private javaName: string;
    javaName(): string;
    javaName(): string;
    name(): "TLS_1_3" | "TLS_1_2" | "TLS_1_1" | "TLS_1_0" | "SSL_3_0";
}