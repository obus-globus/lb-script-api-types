import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NullObject extends Object implements TruffleObject {
    static INSTANCE: NullObject;
    private constructor()
    isNull(): boolean;
    toString(): string;
}