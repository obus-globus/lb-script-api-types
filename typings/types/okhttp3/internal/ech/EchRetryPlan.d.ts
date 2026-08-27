import type { Object } from '../../../java/lang/Object.d.ts'
import type { EchRetryPlan$Companion } from '../../../okhttp3/internal/ech/EchRetryPlan$Companion.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class EchRetryPlan extends Object {
    static Companion: EchRetryPlan$Companion;
    private constructor(publicName: string, configList: ByteString | null)
    readonly configList: ByteString | null;
    readonly publicName: string;
}