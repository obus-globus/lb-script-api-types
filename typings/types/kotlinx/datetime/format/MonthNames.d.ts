import type { Object } from '../../../java/lang/Object.d.ts'
import type { MonthNames$Companion } from '../../../kotlinx/datetime/format/MonthNames$Companion.d.ts'
export class MonthNames extends Object {
    static Companion: MonthNames$Companion;
    constructor(january: string, february: string, march: string, april: string, may: string, june: string, july: string, august: string, september: string, october: string, november: string, december: string)
    constructor(names: string[])
    readonly names: string[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}