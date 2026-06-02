import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { MeasureUnit$MeasurePrefix } from '../../../../../com/ibm/icu/util/MeasureUnit$MeasurePrefix.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SingleUnitImpl extends Object {
    constructor()
    readonly dimensionality: number;
    readonly index: number;
    readonly simpleUnitID: string;
    // private unitPrefix: MeasureUnit$MeasurePrefix;
    build(): MeasureUnit;
    compareTo(arg0: SingleUnitImpl): number;
    copy(): SingleUnitImpl;
    getDimensionality(): number;
    getIndex(): number;
    getNeutralIdentifier(): string;
    getPrefix(): MeasureUnit$MeasurePrefix;
    getSimpleUnitID(): string;
    isCompatibleWith(arg0: SingleUnitImpl): boolean;
    setDimensionality(arg0: number): void;
    setPrefix(arg0: MeasureUnit$MeasurePrefix): void;
    setSimpleUnit(arg0: number, arg1: string[]): void;
}