import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnsafeAccess extends Object {
    static unsafeGetFinalDouble(paramreceiver: Object, paramoffset: number, paramcondition: boolean, paramlocationIdentity: Object, paramexpectedShape: Shape, paramassumption: Object): number;
    static unsafeGetFinalInt(paramreceiver: Object, paramoffset: number, paramcondition: boolean, paramlocationIdentity: Object, paramexpectedShape: Shape, paramassumption: Object): number;
    static unsafeGetFinalLong(paramreceiver: Object, paramoffset: number, paramcondition: boolean, paramlocationIdentity: Object, paramexpectedShape: Shape, paramassumption: Object): number;
    static unsafeGetFinalObject(paramreceiver: Object, paramoffset: number, paramcondition: boolean, paramlocationIdentity: Object, paramexpectedShape: Shape, paramassumption: Object): Object;
    private constructor()
}