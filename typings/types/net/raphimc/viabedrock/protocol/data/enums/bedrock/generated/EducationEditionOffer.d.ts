import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class EducationEditionOffer extends Enum<EducationEditionOffer> {
    static China_Deprecated: EducationEditionOffer;
    static None: EducationEditionOffer;
    static RestOfWorld: EducationEditionOffer;
    static getByName(paramarg0: string): EducationEditionOffer;
    static getByName(paramarg0: string, paramarg1: EducationEditionOffer): EducationEditionOffer;
    static getByValue(paramarg0: number): EducationEditionOffer;
    static getByValue(paramarg0: number, paramarg1: EducationEditionOffer): EducationEditionOffer;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EducationEditionOffer;
    static values(): EducationEditionOffer[];
    private constructor(arg2: number)
    private constructor(arg2: EducationEditionOffer)
    readonly value: number;
    getValue(): number;
    name(): "None" | "RestOfWorld" | "China_Deprecated";
}