import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassSpecializer$Factory } from '../../../java/lang/invoke/ClassSpecializer$Factory.d.ts'
import type { ClassSpecializer$SpeciesData } from '../../../java/lang/invoke/ClassSpecializer$SpeciesData.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ClassSpecializer<T extends unknown, K extends unknown, S extends ClassSpecializer$SpeciesData> extends Object {
    constructor(arg0: Class<T>, arg1: Class<K>, arg2: Class<S>, arg3: MethodType, arg4: MemberName, arg5: string, arg6: MemberName[])
    // private baseConstructorType: MethodType;
    // private cache: Map<K, Object>;
    // private factory: ClassSpecializer$Factory;
    // private keyType: Class<K>;
    // private metaType: Class<S>;
    // private sdAccessor: MemberName;
    // private sdFieldName: string;
    // private topClass: Class<T>;
    // private topClassIsSuper: boolean;
    // private topSpecies: S;
    // private transformMethods: MemberName[];
    baseConstructorType(): MethodType;
    factory(): ClassSpecializer$Factory;
    findSpecies(arg0: K): S;
    keyType(): Class<K>;
    makeFactory(): ClassSpecializer$Factory;
    metaType(): Class<S>;
    newSpeciesData(arg0: K): S;
    topClass(): Class<T>;
    topSpecies(): S;
    topSpeciesKey(): K;
    transformMethods(): MemberName[];
}