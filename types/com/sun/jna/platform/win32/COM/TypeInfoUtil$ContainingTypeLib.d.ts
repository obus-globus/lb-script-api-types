import type { ITypeLib } from '../../../../../../com/sun/jna/platform/win32/COM/ITypeLib.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeInfoUtil$ContainingTypeLib extends Object {
    constructor(arg0: ITypeLib, arg1: number)
    readonly index: number;
    readonly typeLib: ITypeLib;
    getIndex(): number;
    getTypeLib(): ITypeLib;
    setIndex(arg0: number): void;
    setTypeLib(arg0: ITypeLib): void;
}