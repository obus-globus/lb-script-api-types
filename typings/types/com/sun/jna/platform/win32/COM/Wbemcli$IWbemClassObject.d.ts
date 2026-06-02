import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../../../../com/sun/jna/WString.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Wbemcli$IWbemQualifierSet } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemQualifierSet.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Variant$VARIANT } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class Wbemcli$IWbemClassObject extends Unknown {
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    Get(arg0: WString, arg1: number, arg2: Variant$VARIANT$ByReference, arg3: IntByReference, arg4: IntByReference): WinNT$HRESULT;
    Get(arg0: string, arg1: number, arg2: Variant$VARIANT$ByReference, arg3: IntByReference, arg4: IntByReference): WinNT$HRESULT;
    GetMethod(arg0: WString, arg1: number, arg2: PointerByReference, arg3: PointerByReference): WinNT$HRESULT;
    GetMethod(arg0: string): Wbemcli$IWbemClassObject;
    GetMethod(arg0: string, arg1: number, arg2: PointerByReference, arg3: PointerByReference): WinNT$HRESULT;
    GetNames(arg0: WString, arg1: number, arg2: Variant$VARIANT$ByReference, arg3: PointerByReference): WinNT$HRESULT;
    GetNames(arg0: string, arg1: number, arg2: Variant$VARIANT$ByReference): string[];
    GetNames(arg0: string, arg1: number, arg2: Variant$VARIANT$ByReference, arg3: PointerByReference): WinNT$HRESULT;
    GetPropertyQualifierSet(arg0: WString, arg1: PointerByReference): WinNT$HRESULT;
    GetPropertyQualifierSet(arg0: string): Wbemcli$IWbemQualifierSet;
    GetQualifierSet(): Wbemcli$IWbemQualifierSet;
    GetQualifierSet(arg0: PointerByReference): WinNT$HRESULT;
    Put(arg0: WString, arg1: number, arg2: Variant$VARIANT, arg3: number): WinNT$HRESULT;
    Put(arg0: string, arg1: number, arg2: Variant$VARIANT, arg3: number): WinNT$HRESULT;
    Put(arg0: string, arg1: string): void;
    SpawnInstance(): Wbemcli$IWbemClassObject;
    SpawnInstance(arg0: number, arg1: PointerByReference): WinNT$HRESULT;
}