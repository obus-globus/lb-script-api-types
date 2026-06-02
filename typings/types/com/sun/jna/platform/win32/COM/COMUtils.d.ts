import type { COMUtils$COMInfo } from '../../../../../../com/sun/jna/platform/win32/COM/COMUtils$COMInfo.d.ts'
import type { OaIdl$EXCEPINFO } from '../../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class COMUtils extends Object {
    static E_UNEXPECTED: number;
    static S_FALSE: number;
    static S_OK: number;
    static FAILED(paramarg0: WinNT$HRESULT): boolean;
    static FAILED(paramarg0: number): boolean;
    static SUCCEEDED(paramarg0: WinNT$HRESULT): boolean;
    static SUCCEEDED(paramarg0: number): boolean;
    static checkRC(paramarg0: WinNT$HRESULT): void;
    static checkRC(paramarg0: WinNT$HRESULT, paramarg1: OaIdl$EXCEPINFO, paramarg2: IntByReference): void;
    static comIsInitialized(): boolean;
    static getAllCOMInfoOnSystem(): COMUtils$COMInfo[];
    constructor()
}