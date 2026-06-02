import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MsgBoxParamSw } from '../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/msgbox/MsgBoxParamSw.d.ts'
export class User32 extends Object {
    static callGetKeyboardLayout(paramarg0: number): number;
    static callMessageBoxIndirectW(paramarg0: MsgBoxParamSw): void;
    constructor()
}