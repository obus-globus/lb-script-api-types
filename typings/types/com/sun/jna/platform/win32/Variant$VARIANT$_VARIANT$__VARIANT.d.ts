import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { Dispatch } from '../../../../../com/sun/jna/platform/win32/COM/Dispatch.d.ts'
import type { Dispatch$ByReference } from '../../../../../com/sun/jna/platform/win32/COM/Dispatch$ByReference.d.ts'
import type { Unknown } from '../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Unknown$ByReference } from '../../../../../com/sun/jna/platform/win32/COM/Unknown$ByReference.d.ts'
import type { OaIdl$CURRENCY } from '../../../../../com/sun/jna/platform/win32/OaIdl$CURRENCY.d.ts'
import type { OaIdl$CURRENCY$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$CURRENCY$ByReference.d.ts'
import type { OaIdl$DATE } from '../../../../../com/sun/jna/platform/win32/OaIdl$DATE.d.ts'
import type { OaIdl$DATE$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$DATE$ByReference.d.ts'
import type { OaIdl$DECIMAL$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$DECIMAL$ByReference.d.ts'
import type { OaIdl$SAFEARRAY$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAY$ByReference.d.ts'
import type { OaIdl$SAFEARRAYByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAYByReference.d.ts'
import type { OaIdl$VARIANT_BOOL } from '../../../../../com/sun/jna/platform/win32/OaIdl$VARIANT_BOOL.d.ts'
import type { OaIdl$VARIANT_BOOLByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$VARIANT_BOOLByReference.d.ts'
import type { OaIdl$_VARIANT_BOOLByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$_VARIANT_BOOLByReference.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { Variant$VARIANT$_VARIANT$__VARIANT$BRECORD } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT$_VARIANT$__VARIANT$BRECORD.d.ts'
import type { WTypes$BSTR } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WTypes$BSTRByReference } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTRByReference.d.ts'
import type { WinDef$BYTE } from '../../../../../com/sun/jna/platform/win32/WinDef$BYTE.d.ts'
import type { WinDef$CHAR } from '../../../../../com/sun/jna/platform/win32/WinDef$CHAR.d.ts'
import type { WinDef$CHARByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$CHARByReference.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { WinDef$LONGByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$LONGByReference.d.ts'
import type { WinDef$LONGLONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONGLONG.d.ts'
import type { WinDef$LONGLONGByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$LONGLONGByReference.d.ts'
import type { WinDef$PVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$SCODE } from '../../../../../com/sun/jna/platform/win32/WinDef$SCODE.d.ts'
import type { WinDef$SCODEByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$SCODEByReference.d.ts'
import type { WinDef$SHORT } from '../../../../../com/sun/jna/platform/win32/WinDef$SHORT.d.ts'
import type { WinDef$UINT } from '../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinDef$UINTByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$UINTByReference.d.ts'
import type { WinDef$ULONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$ULONGByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONGByReference.d.ts'
import type { WinDef$ULONGLONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONGLONG.d.ts'
import type { WinDef$ULONGLONGByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONGLONGByReference.d.ts'
import type { WinDef$USHORT } from '../../../../../com/sun/jna/platform/win32/WinDef$USHORT.d.ts'
import type { WinDef$USHORTByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$USHORTByReference.d.ts'
import type { ByteByReference } from '../../../../../com/sun/jna/ptr/ByteByReference.d.ts'
import type { DoubleByReference } from '../../../../../com/sun/jna/ptr/DoubleByReference.d.ts'
import type { FloatByReference } from '../../../../../com/sun/jna/ptr/FloatByReference.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { ShortByReference } from '../../../../../com/sun/jna/ptr/ShortByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Variant$VARIANT$_VARIANT$__VARIANT extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    constructor(arg0: Pointer)
    bVal: WinDef$BYTE;
    boolVal: OaIdl$VARIANT_BOOL;
    bstrVal: WTypes$BSTR;
    byref: WinDef$PVOID;
    cVal: WinDef$CHAR;
    cyVal: OaIdl$CURRENCY;
    date: OaIdl$DATE;
    dblVal: number;
    fltVal: number;
    iVal: WinDef$SHORT;
    intVal: number;
    lVal: WinDef$LONG;
    llVal: WinDef$LONGLONG;
    parray: OaIdl$SAFEARRAY$ByReference;
    pbVal: ByteByReference;
    pbool: OaIdl$_VARIANT_BOOLByReference;
    pboolVal: OaIdl$VARIANT_BOOLByReference;
    pbstrVal: WTypes$BSTRByReference;
    pcVal: WinDef$CHARByReference;
    pcyVal: OaIdl$CURRENCY$ByReference;
    pdate: OaIdl$DATE$ByReference;
    pdblVal: DoubleByReference;
    pdecVal: OaIdl$DECIMAL$ByReference;
    pdispVal: Dispatch;
    pfltVal: FloatByReference;
    piVal: ShortByReference;
    pintVal: IntByReference;
    plVal: WinDef$LONGByReference;
    pllVal: WinDef$LONGLONGByReference;
    pparray: OaIdl$SAFEARRAYByReference;
    ppdispVal: Dispatch$ByReference;
    ppunkVal: Unknown$ByReference;
    pscode: WinDef$SCODEByReference;
    puiVal: WinDef$USHORTByReference;
    puintVal: WinDef$UINTByReference;
    pulVal: WinDef$ULONGByReference;
    pullVal: WinDef$ULONGLONGByReference;
    punkVal: Unknown;
    pvRecord: Variant$VARIANT$_VARIANT$__VARIANT$BRECORD;
    pvarVal: Variant$VARIANT$ByReference;
    scode: WinDef$SCODE;
    uiVal: WinDef$USHORT;
    uintVal: WinDef$UINT;
    ulVal: WinDef$ULONG;
    ullVal: WinDef$ULONGLONG;
}