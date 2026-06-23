import type { SslContextOption } from '../../../../io/netty/handler/ssl/SslContextOption.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SslProvider extends Enum<SslProvider> {
    static JDK: SslProvider;
    static OPENSSL: SslProvider;
    static OPENSSL_REFCNT: SslProvider;
    static isAlpnSupported(paramarg0: SslProvider): boolean;
    static isOptionSupported(paramarg0: SslProvider, paramarg1: SslContextOption<Object>): boolean;
    static isTlsv13Supported(paramarg0: SslProvider): boolean;
    static isTlsv13Supported(paramarg0: SslProvider, paramarg1: { [key: string]: any }): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SslProvider;
    static values(): (Object | null)[];
    private constructor()
    name(): "JDK" | "OPENSSL" | "OPENSSL_REFCNT";
}