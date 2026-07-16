import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Defaults extends Object {
    static defaultValue<T extends unknown>(paramtype: Class<T>): T;
    private constructor()
}