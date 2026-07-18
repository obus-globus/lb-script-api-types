import type { DigestQop } from '../../../../io/ktor/http/auth/DigestQop.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DigestQop$Companion extends Object {
    readonly AUTH: DigestQop;
    readonly AUTH_INT: DigestQop;
    readonly DEFAULT_QOPS: DigestQop[];
    from(value: string): DigestQop | null;
}