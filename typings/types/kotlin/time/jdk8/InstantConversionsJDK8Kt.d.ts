import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Instant as Instant_2 } from '../../../kotlin/time/Instant.d.ts'
export class InstantConversionsJDK8Kt extends Object {
    static toJavaInstant(paramarg0: Instant_2): Instant;
    static toKotlinInstant(paramarg0: Instant): Instant_2;
}