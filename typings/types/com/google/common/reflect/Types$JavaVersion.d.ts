import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Types$JavaVersion extends Enum<Types$JavaVersion> {
    static JAVA6: Types$JavaVersion;
    static JAVA7: Types$JavaVersion;
    static JAVA8: Types$JavaVersion;
    static JAVA9: Types$JavaVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Types$JavaVersion;
    static values(): Types$JavaVersion[];
    private constructor()
    jdkTypeDuplicatesOwnerName(): boolean;
    newArrayType(componentType: Type): Type;
    typeName(type: Type): string;
    usedInGenericType(type: Type): Type;
    usedInGenericType(types: Type[]): Type[];
    name(): "JAVA6" | "JAVA7" | "JAVA8" | "JAVA9";
}