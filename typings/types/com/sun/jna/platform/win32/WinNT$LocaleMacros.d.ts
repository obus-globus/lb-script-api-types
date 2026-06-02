import type { WinDef$LCID } from '../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinNT$LocaleMacros extends Object {
    static LANGIDFROMLCID(paramarg0: WinDef$LCID): number;
    static MAKELANGID(paramarg0: number, paramarg1: number): number;
    static MAKELCID(paramarg0: number, paramarg1: number): WinDef$LCID;
    static MAKESORTLCID(paramarg0: number, paramarg1: number, paramarg2: number): WinDef$LCID;
    static PRIMARYLANGID(paramarg0: number): number;
    static SORTIDFROMLCID(paramarg0: WinDef$LCID): number;
    static SORTVERSIONFROMLCID(paramarg0: WinDef$LCID): number;
    static SUBLANGID(paramarg0: number): number;
    constructor()
}