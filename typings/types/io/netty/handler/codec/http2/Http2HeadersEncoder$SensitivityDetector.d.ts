import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export interface Http2HeadersEncoder$SensitivityDetector extends Object{
    isSensitive(arg0: CharSequence, arg1: CharSequence): boolean;
}