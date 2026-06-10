import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { Dispatch } from '../../../../../com/sun/jna/platform/win32/COM/Dispatch.d.ts'
import type { IDispatch } from '../../../../../com/sun/jna/platform/win32/COM/IDispatch.d.ts'
import type { OaIdl$DATE } from '../../../../../com/sun/jna/platform/win32/OaIdl$DATE.d.ts'
import type { OaIdl$DECIMAL } from '../../../../../com/sun/jna/platform/win32/OaIdl$DECIMAL.d.ts'
import type { OaIdl$SAFEARRAY } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAY.d.ts'
import type { OaIdl$SAFEARRAYByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAYByReference.d.ts'
import type { OaIdl$VARIANT_BOOL } from '../../../../../com/sun/jna/platform/win32/OaIdl$VARIANT_BOOL.d.ts'
import type { Variant$VARIANT$_VARIANT } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT$_VARIANT.d.ts'
import type { WTypes$BSTR } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WTypes$BSTRByReference } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTRByReference.d.ts'
import type { WTypes$VARTYPE } from '../../../../../com/sun/jna/platform/win32/WTypes$VARTYPE.d.ts'
import type { WinDef$BOOL } from '../../../../../com/sun/jna/platform/win32/WinDef$BOOL.d.ts'
import type { WinDef$BYTE } from '../../../../../com/sun/jna/platform/win32/WinDef$BYTE.d.ts'
import type { WinDef$CHAR } from '../../../../../com/sun/jna/platform/win32/WinDef$CHAR.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { WinDef$SHORT } from '../../../../../com/sun/jna/platform/win32/WinDef$SHORT.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Variant$VARIANT extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static VARIANT_MISSING: Variant$VARIANT;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: Dispatch)
    constructor(arg0: IDispatch)
    constructor(arg0: OaIdl$DATE)
    constructor(arg0: OaIdl$SAFEARRAY)
    constructor(arg0: OaIdl$SAFEARRAYByReference)
    constructor(arg0: OaIdl$VARIANT_BOOL)
    constructor(arg0: WTypes$BSTR)
    constructor(arg0: WTypes$BSTRByReference)
    constructor(arg0: WinDef$BOOL)
    constructor(arg0: WinDef$BYTE)
    constructor(arg0: WinDef$CHAR)
    constructor(arg0: WinDef$LONG)
    constructor(arg0: WinDef$SHORT)
    constructor(arg0: IntByReference)
    constructor(arg0: Date)
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: string)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: number)
    constructor(arg0: string)
    _variant: Variant$VARIANT$_VARIANT;
    decVal: OaIdl$DECIMAL;
    booleanValue(): boolean;
    byteValue(): number;
    dateValue(): Date;
    doubleValue(): number;
    floatValue(): number;
    getValue(): Object;
    getVarType(): WTypes$VARTYPE;
    intValue(): number;
    longValue(): number;
    setValue(arg0: OaIdl$SAFEARRAY): void;
    setValue(arg0: OaIdl$SAFEARRAYByReference): void;
    setValue(arg0: WTypes$VARTYPE, arg1: Object): void;
    setValue(arg0: number, arg1: Object): void;
    setVarType(arg0: number): void;
    shortValue(): number;
    stringValue(): string;
}