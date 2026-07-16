import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CConstant$ValueAccess extends Object {
    static get<T extends unknown>(paramdeclaringClass: Class<Object>, parammethodName: string, paramreturnType: Class<T>): T;
    static get<T extends unknown>(paramcEnum: Enum<any>, parammethodName: string): T;
    private constructor()
}