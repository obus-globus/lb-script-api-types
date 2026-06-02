import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ResolvedType extends Object {
    constructor()
    getParameterSource(): Class<Object>;
    isAbstract(): boolean;
    isFinal(): boolean;
    isInterface(): boolean;
    isThrowable(): boolean;
}