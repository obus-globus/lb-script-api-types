import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassTreeIdRegistry extends Object {
    static NO_ID_VALUE: number;
    constructor()
    // private classToLastIdCache: Object2IntMap<Class<Object>>;
    define(clazz: Class<Object>): number;
    getCount(clazz: Class<Object>): number;
    getLastIdFor(clazz: Class<Object>): number;
}