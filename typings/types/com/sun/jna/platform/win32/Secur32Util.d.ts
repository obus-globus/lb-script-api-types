import type { Secur32Util$SecurityPackage } from '../../../../../com/sun/jna/platform/win32/Secur32Util$SecurityPackage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Secur32Util extends Object {
    static getSecurityPackages(): Secur32Util$SecurityPackage[];
    static getUserNameEx(paramarg0: number): string;
    constructor()
}