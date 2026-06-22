import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketExtensions } from '../../../../org/newsclub/net/unix/AFSocketExtensions.d.ts'
export interface AFGenericSocketExtensions extends Object, AFSocketExtensions{
    ensureAncillaryReceiveBufferSize(arg0: number): void;
    getAncillaryReceiveBufferSize(): number;
    setAncillaryReceiveBufferSize(arg0: number): void;
}