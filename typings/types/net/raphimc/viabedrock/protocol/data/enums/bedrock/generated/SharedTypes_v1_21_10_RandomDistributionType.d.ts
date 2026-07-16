import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_v1_21_10_RandomDistributionType extends Enum<SharedTypes_v1_21_10_RandomDistributionType> {
    static FixedGrid: SharedTypes_v1_21_10_RandomDistributionType;
    static Gaussian: SharedTypes_v1_21_10_RandomDistributionType;
    static InverseGaussian: SharedTypes_v1_21_10_RandomDistributionType;
    static JitteredGrid: SharedTypes_v1_21_10_RandomDistributionType;
    static SingleValued: SharedTypes_v1_21_10_RandomDistributionType;
    static Triangle: SharedTypes_v1_21_10_RandomDistributionType;
    static Uniform: SharedTypes_v1_21_10_RandomDistributionType;
    static getByName(paramarg0: string): SharedTypes_v1_21_10_RandomDistributionType;
    static getByName(paramarg0: string, paramarg1: SharedTypes_v1_21_10_RandomDistributionType): SharedTypes_v1_21_10_RandomDistributionType;
    static getByValue(paramarg0: number): SharedTypes_v1_21_10_RandomDistributionType;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_v1_21_10_RandomDistributionType): SharedTypes_v1_21_10_RandomDistributionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SharedTypes_v1_21_10_RandomDistributionType;
    static values(): SharedTypes_v1_21_10_RandomDistributionType[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_v1_21_10_RandomDistributionType)
    readonly value: number;
    getValue(): number;
    name(): "SingleValued" | "Uniform" | "Gaussian" | "InverseGaussian" | "FixedGrid" | "JitteredGrid" | "Triangle";
}