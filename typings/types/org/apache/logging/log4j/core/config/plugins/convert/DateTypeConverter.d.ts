import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Date } from '../../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DateTypeConverter extends Object {
    static fromMillis<D extends Date>(parammillis: number, paramtype: Class<D>): D;
    private constructor()
}