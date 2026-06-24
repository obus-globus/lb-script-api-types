import type { SelfSignedCertificate$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { SelfSignedCertificate$Builder } from '../../../../../io/netty/handler/ssl/util/SelfSignedCertificate$Builder.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { PrivateKey } from '../../../../../java/security/PrivateKey.d.ts'
import type { SecureRandom } from '../../../../../java/security/SecureRandom.d.ts'
import type { X509Certificate } from '../../../../../java/security/cert/X509Certificate.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SelfSignedCertificate extends Object {
    static builder(): SelfSignedCertificate$Builder;
    constructor()
    private constructor(arg0: SelfSignedCertificate$Builder)
    constructor(arg0: SelfSignedCertificate$Builder, arg1: SelfSignedCertificate$1)
    constructor(arg0: Date, arg1: Date)
    constructor(arg0: Date, arg1: Date, arg2: string, arg3: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: SecureRandom, arg2: number)
    constructor(arg0: string, arg1: SecureRandom, arg2: number, arg3: Date, arg4: Date)
    constructor(arg0: string, arg1: SecureRandom, arg2: number, arg3: Date, arg4: Date, arg5: string)
    constructor(arg0: string, arg1: SecureRandom, arg2: string, arg3: number)
    constructor(arg0: string, arg1: Date, arg2: Date)
    constructor(arg0: string, arg1: Date, arg2: Date, arg3: string, arg4: number)
    constructor(arg0: string, arg1: string, arg2: number)
    // private cert: X509Certificate;
    // private certificate: File;
    // private key: PrivateKey;
    // private privateKey: File;
    cert(): X509Certificate;
    certificate(): File;
    delete(): void;
    key(): PrivateKey;
    privateKey(): File;
}