import type { Object } from '../../../java/lang/Object.d.ts'
import type { TSRequest } from '../../../sun/security/timestamp/TSRequest.d.ts'
import type { TSResponse } from '../../../sun/security/timestamp/TSResponse.d.ts'
export interface Timestamper extends Object{
    generateTimestamp(arg0: TSRequest): TSResponse;
}