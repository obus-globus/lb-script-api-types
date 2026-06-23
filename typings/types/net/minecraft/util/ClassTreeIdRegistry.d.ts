import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassTreeIdRegistry extends Object {
    static NO_ID_VALUE: number;
    constructor()
    // private classToLastIdCache: { [key: string]: any };
    define(clazz: Class<Object>): number;
    getCount(clazz: Class<Object>): number;
    getLastIdFor(clazz: Class<Object>): number;
}