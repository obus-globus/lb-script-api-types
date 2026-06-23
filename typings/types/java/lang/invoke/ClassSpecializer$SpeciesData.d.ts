import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassSpecializer } from '../../../java/lang/invoke/ClassSpecializer.d.ts'
import type { LambdaForm$NamedFunction } from '../../../java/lang/invoke/LambdaForm$NamedFunction.d.ts'
import type { MemberName } from '../../../java/lang/invoke/MemberName.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ClassSpecializer$SpeciesData extends Object {
    constructor(null_: ClassSpecializer$SpeciesData)
    // private factories: MethodHandle[];
    // private fieldTypes: Class<Object>[];
    // private getters: MethodHandle[];
    // private key: K;
    // private nominalGetters: LambdaForm$NamedFunction[];
    // private speciesCode: Class<T>;
    // private transformHelpers: MethodHandle[];
    deriveClassName(): string;
    deriveFieldTypes<K extends unknown>(arg0: K): Class<Object>[];
    deriveSuperClass<T extends unknown>(): Class<T>;
    deriveTransformHelper(arg0: MemberName, arg1: number): MethodHandle;
    deriveTransformHelperArguments<X extends unknown>(arg0: MemberName, arg1: number, arg2: X[], arg3: X[]): X[];
    deriveTypeString(): string;
    equals(arg0: Object | null): boolean;
    factory(): MethodHandle;
    fieldCount(): number;
    fieldTypes(): Class<Object>[];
    getter(arg0: number): MethodHandle;
    getterFunction(arg0: number): LambdaForm$NamedFunction;
    getterFunctions(): LambdaForm$NamedFunction[];
    getters(): MethodHandle[];
    hashCode(): number;
    isResolved(): boolean;
    key<K extends unknown>(): K;
    outer<T extends unknown, K extends unknown, S extends ClassSpecializer$SpeciesData>(): ClassSpecializer<T, K, S>;
    speciesCode<T extends unknown>(): Class<T>;
    toString(): string;
    transformHelper(arg0: number): MethodHandle;
    // private transformHelperType(arg0: number): MethodType;
}