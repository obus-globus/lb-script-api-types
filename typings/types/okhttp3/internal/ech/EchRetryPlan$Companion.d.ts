import type { Object } from '../../../java/lang/Object.d.ts'
import type { Regex } from '../../../kotlin/text/Regex.d.ts'
import type { EchRetryPlan } from '../../../okhttp3/internal/ech/EchRetryPlan.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class EchRetryPlan$Companion extends Object {
    // private INVALID_PUBLIC_NAME: Regex;
    getOrNull(publicName: string, configList: ByteString | null): EchRetryPlan | null;
}