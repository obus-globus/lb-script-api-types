import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../../../../com/sun/jna/WString.d.ts'
import type { IRecordInfo } from '../../../../../../com/sun/jna/platform/win32/COM/IRecordInfo.d.ts'
import type { ITypeInfo } from '../../../../../../com/sun/jna/platform/win32/COM/ITypeInfo.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$GUID } from '../../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Variant$VARIANT } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { WTypes$BSTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WinDef$BOOL } from '../../../../../../com/sun/jna/platform/win32/WinDef$BOOL.d.ts'
import type { WinDef$PVOID } from '../../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
export class RecordInfo extends Unknown implements IRecordInfo {
    static IID_IRecordInfo: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    GetField(arg0: WinDef$PVOID, arg1: WString, arg2: Variant$VARIANT): WinNT$HRESULT;
    GetFieldNames(arg0: WinDef$ULONG, arg1: WTypes$BSTR): WinNT$HRESULT;
    GetFieldNoCopy(arg0: WinDef$PVOID, arg1: WString, arg2: Variant$VARIANT, arg3: WinDef$PVOID): WinNT$HRESULT;
    GetGuid(arg0: Guid$GUID): WinNT$HRESULT;
    GetName(arg0: WTypes$BSTR): WinNT$HRESULT;
    GetSize(arg0: WinDef$ULONG): WinNT$HRESULT;
    GetTypeInfo(arg0: ITypeInfo): WinNT$HRESULT;
    IsMatchingType(arg0: IRecordInfo): WinDef$BOOL;
    PutField(arg0: WinDef$ULONG, arg1: WinDef$PVOID, arg2: WString, arg3: Variant$VARIANT): WinNT$HRESULT;
    PutFieldNoCopy(arg0: WinDef$ULONG, arg1: WinDef$PVOID, arg2: WString, arg3: Variant$VARIANT): WinNT$HRESULT;
    RecordClear(arg0: WinDef$PVOID): WinNT$HRESULT;
    RecordCopy(arg0: WinDef$PVOID, arg1: WinDef$PVOID): WinNT$HRESULT;
    RecordCreate(): WinDef$PVOID;
    RecordCreateCopy(arg0: WinDef$PVOID, arg1: WinDef$PVOID): WinNT$HRESULT;
    RecordDestroy(arg0: WinDef$PVOID): WinNT$HRESULT;
    RecordInit(arg0: WinDef$PVOID): WinNT$HRESULT;
}