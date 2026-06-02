import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../../../java/lang/ClassLoader.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class ReflectClassUtilKt extends Object {
    static getClassId(paramarg0: Class<Object>): ClassId;
    static getDesc(paramarg0: Class<Object>): string;
    static getFunctionClassArity(paramarg0: Class<Object>): number;
    static getParameterizedTypeArguments(paramarg0: Type): Type[];
    static getPrimitiveByWrapper(paramarg0: Class<Object>): Class<Object>;
    static getSafeClassLoader(paramarg0: Class<Object>): ClassLoader;
    static getWrapperByPrimitive(paramarg0: Class<Object>): Class<Object>;
    static isEnumClassOrSpecializedEnumEntryClass(paramarg0: Class<Object>): boolean;
}