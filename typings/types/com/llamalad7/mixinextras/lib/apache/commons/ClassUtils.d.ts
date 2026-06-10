import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassUtils extends Object {
    static INNER_CLASS_SEPARATOR: string;
    static PACKAGE_SEPARATOR: string;
    static getAllInterfaces(paramarg0: Class<Object>): Class<Object>[];
}