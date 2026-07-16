import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class TypeConverters extends Object {
    static CATEGORY: string;
    static convert<T extends unknown>(params: string, paramclazz: Class<T>, paramdefaultValue: Object): T;
    constructor()
}