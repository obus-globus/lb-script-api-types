import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { MethodTypeDesc } from '../../../java/lang/constant/MethodTypeDesc.d.ts'
import type { ClassSpecializer$SpeciesData } from '../../../java/lang/invoke/ClassSpecializer$SpeciesData.d.ts'
import type { LambdaForm$NamedFunction } from '../../../java/lang/invoke/LambdaForm$NamedFunction.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassSpecializer$Factory extends Object {
    constructor(null_: ClassSpecializer$Factory)
    // private CD_SPECIES_DATA: ClassDesc;
    // private MTD_SPECIES_DATA: MethodTypeDesc;
    // private SPECIES_DATA_MODS: number;
    // private SPECIES_DATA_NAME: string;
    // private TRANSFORM_MODS: number[];
    // private TRANSFORM_NAMES: string[];
    // private TRANSFORM_TYPES: MethodType[];
    chooseFieldName(arg0: Class<Object>, arg1: number): string;
    // private findFactories(arg0: Class<T>, arg1: Class<Object>[]): MethodHandle[];
    findFactory(arg0: Class<T>, arg1: Class<Object>[]): MethodHandle;
    // private findGetter(arg0: Class<Object>, arg1: Class<Object>[], arg2: number): MethodHandle;
    // private findGetters(arg0: Class<Object>, arg1: Class<Object>[]): MethodHandle[];
    generateConcreteSpeciesCode(arg0: string, arg1: ClassSpecializer$SpeciesData): Class<T>;
    generateConcreteSpeciesCodeFile(arg0: string, arg1: ClassSpecializer$SpeciesData): number[];
    linkCodeToSpeciesData(arg0: Class<T>, arg1: ClassSpecializer$SpeciesData, arg2: boolean): void;
    linkSpeciesDataToCode(arg0: ClassSpecializer$SpeciesData, arg1: Class<T>): void;
    loadSpecies<S extends ClassSpecializer$SpeciesData>(arg0: S): S;
    loadSpeciesDataFromCode<S extends ClassSpecializer$SpeciesData>(arg0: Class<T>): S;
    makeNominalGetters(arg0: Class<Object>[], arg1: MethodHandle[]): LambdaForm$NamedFunction[];
    // private readSpeciesDataFromCode<S extends ClassSpecializer$SpeciesData>(arg0: Class<T>): S;
    // private reflectSDField(arg0: Class<T>): Field;
}