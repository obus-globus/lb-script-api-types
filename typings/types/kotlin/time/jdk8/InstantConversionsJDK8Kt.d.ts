import type { Instant } from '../../../java/time/Instant.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Instant as Instant_2 } from '../../../kotlin/time/Instant.d.ts'
export class InstantConversionsJDK8Kt extends Object {
    static toJavaInstant(self: Instant_2): Instant;
    static toKotlinInstant(self: Instant): Instant_2;
}