import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NullObject extends Object implements TruffleObject {
    static nullCheck(paramobj: Object): Object;
    private constructor()
    isNull(): boolean;
}