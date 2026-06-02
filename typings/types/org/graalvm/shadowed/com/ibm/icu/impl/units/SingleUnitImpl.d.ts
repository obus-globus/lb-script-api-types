import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { MeasureUnit$MeasurePrefix } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit$MeasurePrefix.d.ts'
export class SingleUnitImpl extends Object {
    constructor()
    readonly dimensionality: number;
    readonly index: number;
    readonly simpleUnitID: string;
    // private unitPrefix: MeasureUnit$MeasurePrefix;
    build(): MeasureUnit;
    compareTo(other: SingleUnitImpl): number;
    copy(): SingleUnitImpl;
    getDimensionality(): number;
    getIndex(): number;
    getNeutralIdentifier(): string;
    getPrefix(): MeasureUnit$MeasurePrefix;
    getSimpleUnitID(): string;
    isCompatibleWith(other: SingleUnitImpl): boolean;
    setDimensionality(dimensionality: number): void;
    setPrefix(unitPrefix: MeasureUnit$MeasurePrefix): void;
    setSimpleUnit(simpleUnitIndex: number, simpleUnits: string[]): void;
}