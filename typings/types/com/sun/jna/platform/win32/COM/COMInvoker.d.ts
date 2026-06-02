import type { PointerType } from '../../../../../../com/sun/jna/PointerType.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class COMInvoker extends PointerType {
    constructor()
    _invokeNativeInt(arg0: number, arg1: Object[]): number;
    _invokeNativeObject(arg0: number, arg1: Object[], arg2: Class<Object>): Object;
    _invokeNativeVoid(arg0: number, arg1: Object[]): void;
}