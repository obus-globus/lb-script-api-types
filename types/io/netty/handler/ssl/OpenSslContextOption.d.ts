import type { OpenSslAsyncPrivateKeyMethod } from '../../../../io/netty/handler/ssl/OpenSslAsyncPrivateKeyMethod.d.ts'
import type { OpenSslCertificateCompressionConfig$AlgorithmConfig } from '../../../../io/netty/handler/ssl/OpenSslCertificateCompressionConfig$AlgorithmConfig.d.ts'
import type { OpenSslPrivateKeyMethod } from '../../../../io/netty/handler/ssl/OpenSslPrivateKeyMethod.d.ts'
import type { SslContextOption } from '../../../../io/netty/handler/ssl/SslContextOption.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslContextOption<T extends Object | number | string | boolean> extends SslContextOption<T> {
    static ASYNC_PRIVATE_KEY_METHOD: OpenSslContextOption<OpenSslAsyncPrivateKeyMethod>;
    static CERTIFICATE_COMPRESSION_ALGORITHMS: OpenSslContextOption<OpenSslCertificateCompressionConfig$AlgorithmConfig[]>;
    static GROUPS: OpenSslContextOption<(Object | null)[]>;
    static MAX_CERTIFICATE_LIST_BYTES: OpenSslContextOption<number>;
    static PRIVATE_KEY_METHOD: OpenSslContextOption<OpenSslPrivateKeyMethod>;
    static TLS_FALSE_START: OpenSslContextOption<boolean>;
    static TMP_DH_KEYLENGTH: OpenSslContextOption<number>;
    static USE_JDK_PROVIDER_SIGNATURES: OpenSslContextOption<boolean>;
    static USE_TASKS: OpenSslContextOption<boolean>;
    static exists(paramarg0: string): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): SslContextOption<Object>;
    static valueOf(paramarg0: string): SslContextOption<Object>;
    private constructor(arg0: string)
}