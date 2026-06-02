import type { Memory } from '../../../../../com/sun/jna/Memory.d.ts'
import type { Winevt$EVT_HANDLE } from '../../../../../com/sun/jna/platform/win32/Winevt$EVT_HANDLE.d.ts'
import type { Winevt$EVT_VARIANT } from '../../../../../com/sun/jna/platform/win32/Winevt$EVT_VARIANT.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WevtapiUtil extends Object {
    static EvtFormatMessage(paramarg0: Winevt$EVT_HANDLE, paramarg1: Winevt$EVT_HANDLE, paramarg2: number, paramarg3: number, paramarg4: (Object | null)[], paramarg5: number): string;
    static EvtGetChannelConfigProperty(paramarg0: Winevt$EVT_HANDLE, paramarg1: number): Winevt$EVT_VARIANT;
    static EvtGetExtendedStatus(): string;
    static EvtGetPublisherMetadataProperty(paramarg0: Winevt$EVT_HANDLE, paramarg1: number, paramarg2: number): Memory;
    static EvtNextPublisherId(paramarg0: Winevt$EVT_HANDLE): string;
    static EvtRender(paramarg0: Winevt$EVT_HANDLE, paramarg1: Winevt$EVT_HANDLE, paramarg2: number, paramarg3: IntByReference): Memory;
    constructor()
}