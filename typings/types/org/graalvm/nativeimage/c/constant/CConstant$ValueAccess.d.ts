import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CConstant$ValueAccess extends Object {
    static get(paramdeclaringClass: Class<Object>, parammethodName: string, paramreturnType: Class<Object>): Object | null;
    static get(paramcEnum: Enum<any>, parammethodName: string): Object | null;
    private constructor()
}