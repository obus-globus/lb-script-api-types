import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeParameterErasureOptions extends Object {
    constructor(arg0: boolean, arg1: boolean)
    readonly intersectUpperBounds: boolean;
    readonly leaveNonTypeParameterTypes: boolean;
    getIntersectUpperBounds(): boolean;
    getLeaveNonTypeParameterTypes(): boolean;
}