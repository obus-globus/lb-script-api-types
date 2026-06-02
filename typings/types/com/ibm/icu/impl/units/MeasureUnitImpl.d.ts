import type { MeasureUnitImpl$MeasureUnitImplWithIndex } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplWithIndex.d.ts'
import type { SingleUnitImpl } from '../../../../../com/ibm/icu/impl/units/SingleUnitImpl.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { MeasureUnit$Complexity } from '../../../../../com/ibm/icu/util/MeasureUnit$Complexity.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MeasureUnitImpl extends Object {
    static forCurrencyCode(paramarg0: string): MeasureUnitImpl;
    static forIdentifier(paramarg0: string): MeasureUnitImpl;
    constructor()
    constructor(arg0: SingleUnitImpl)
    readonly complexity: MeasureUnit$Complexity;
    readonly constantDenominator: number;
    readonly identifier: string;
    readonly singleUnits: SingleUnitImpl[];
    appendSingleUnit(arg0: SingleUnitImpl): boolean;
    applyDimensionality(arg0: number): void;
    build(): MeasureUnit;
    copy(): MeasureUnitImpl;
    copyAndSimplify(): MeasureUnitImpl;
    // private countCharacter(arg0: string, arg1: string): number;
    extractIndividualUnitsWithIndices(): MeasureUnitImpl$MeasureUnitImplWithIndex[];
    getComplexity(): MeasureUnit$Complexity;
    getConstantDenominator(): number;
    // private getConstantsString(arg0: number): string;
    getIdentifier(): string;
    getSingleUnitImpl(): SingleUnitImpl;
    getSingleUnits(): SingleUnitImpl[];
    serialize(): void;
    setComplexity(arg0: MeasureUnit$Complexity): void;
    setConstantDenominator(arg0: number): void;
    takeReciprocal(): void;
    toString(): string;
}