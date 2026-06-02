import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeasureUnitImpl$MeasureUnitImplWithIndex } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl$MeasureUnitImplWithIndex.d.ts'
import type { SingleUnitImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/SingleUnitImpl.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { MeasureUnit$Complexity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit$Complexity.d.ts'
export class MeasureUnitImpl extends Object {
    static forCurrencyCode(paramcurrencyCode: string): MeasureUnitImpl;
    static forIdentifier(paramidentifier: string): MeasureUnitImpl;
    constructor()
    constructor(singleUnit: SingleUnitImpl)
    readonly complexity: MeasureUnit$Complexity;
    readonly identifier: string;
    readonly singleUnits: SingleUnitImpl[];
    appendSingleUnit(singleUnit: SingleUnitImpl): boolean;
    applyDimensionality(dimensionality: number): void;
    build(): MeasureUnit;
    copy(): MeasureUnitImpl;
    copyAndSimplify(): MeasureUnitImpl;
    extractIndividualUnitsWithIndices(): MeasureUnitImpl$MeasureUnitImplWithIndex[];
    getComplexity(): MeasureUnit$Complexity;
    getIdentifier(): string;
    getSingleUnitImpl(): SingleUnitImpl;
    getSingleUnits(): SingleUnitImpl[];
    serialize(): void;
    setComplexity(complexity: MeasureUnit$Complexity): void;
    takeReciprocal(): void;
    toString(): string;
}