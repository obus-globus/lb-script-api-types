import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { OaIdl$SAFEARRAY$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAY$ByReference.d.ts'
import type { OaIdl$SAFEARRAYBOUND } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAYBOUND.d.ts'
import type { WTypes$VARTYPE } from '../../../../../com/sun/jna/platform/win32/WTypes$VARTYPE.d.ts'
import type { WinDef$PVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$ULONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$USHORT } from '../../../../../com/sun/jna/platform/win32/WinDef$USHORT.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$SAFEARRAY extends Structure implements Closeable {
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
    static createSafeArray(paramarg0: WTypes$VARTYPE, paramarg1: number[]): OaIdl$SAFEARRAY$ByReference;
    static createSafeArray(paramarg0: number[]): OaIdl$SAFEARRAY$ByReference;
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    cDims: WinDef$USHORT;
    cLocks: WinDef$ULONG;
    cbElements: WinDef$ULONG;
    fFeatures: WinDef$USHORT;
    pvData: WinDef$PVOID;
    rgsabound: OaIdl$SAFEARRAYBOUND[];
    accessData(): Pointer;
    close(): void;
    destroy(): void;
    getDimensionCount(): number;
    getElement(arg0: number[]): Object;
    getElemsize(): number;
    getLBound(arg0: number): number;
    getUBound(arg0: number): number;
    getVarType(): WTypes$VARTYPE;
    lock(): void;
    ptrOfIndex(arg0: number[]): Pointer;
    putElement(arg0: Object, arg1: number[]): void;
    read(): void;
    redim(arg0: number, arg1: number): void;
    unaccessData(): void;
    unlock(): void;
}