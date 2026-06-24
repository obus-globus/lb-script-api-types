import type { Types$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Types$JavaVersion extends Enum<Types$JavaVersion> {
    static JAVA6: Types$JavaVersion;
    static JAVA7: Types$JavaVersion;
    static JAVA8: Types$JavaVersion;
    static JAVA9: Types$JavaVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Types$JavaVersion;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: Types$1)
    jdkTypeDuplicatesOwnerName(): boolean;
    newArrayType(componentType: Type): Type;
    typeName(type: Type): string;
    usedInGenericType(type: Type): Type;
    usedInGenericType(types: Type[]): Type[];
    name(): "JAVA6" | "JAVA7" | "JAVA8" | "JAVA9";
}