import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ValueRange extends Object implements Serializable {
    static of(paramarg0: number, paramarg1: number): ValueRange;
    static of(paramarg0: number, paramarg1: number, paramarg2: number): ValueRange;
    static of(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): ValueRange;
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private maxLargest: number;
    // private maxSmallest: number;
    // private minLargest: number;
    // private minSmallest: number;
    checkValidIntValue(arg0: number, arg1: TemporalField): number;
    checkValidValue(arg0: number, arg1: TemporalField): number;
    equals(arg0: Object | null): boolean;
    // private genInvalidFieldMessage(arg0: TemporalField, arg1: number): string;
    getLargestMinimum(): number;
    getMaximum(): number;
    getMinimum(): number;
    getSmallestMaximum(): number;
    hashCode(): number;
    isFixed(): boolean;
    isIntValue(): boolean;
    isValidIntValue(arg0: number): boolean;
    isValidValue(arg0: number): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
}