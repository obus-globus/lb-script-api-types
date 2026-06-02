import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IEnumVariant } from '../../../../../../com/sun/jna/platform/win32/COM/IEnumVariant.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { Variant$VARIANT } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
export class EnumVariant extends Unknown implements IEnumVariant {
    static IID: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    static REFIID: Guid$REFIID;
    constructor()
    constructor(arg0: Pointer)
    Clone(): EnumVariant;
    Next(arg0: number): Variant$VARIANT[];
    Reset(): void;
    Skip(arg0: number): void;
}