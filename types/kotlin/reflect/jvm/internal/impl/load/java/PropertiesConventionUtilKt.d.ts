import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class PropertiesConventionUtilKt extends Object {
    static getPropertyNamesCandidatesByAccessorName(paramarg0: Name): Name[];
    static propertyNameByGetMethodName(paramarg0: Name): Name;
    static propertyNameBySetMethodName(paramarg0: Name, paramarg1: boolean): Name;
    static propertyNamesBySetMethodName(paramarg0: Name): Name[];
}