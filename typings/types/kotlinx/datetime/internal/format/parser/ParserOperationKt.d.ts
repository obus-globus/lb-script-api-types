import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { ParserStructure } from '../../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class ParserOperationKt extends Object {
    static ReducedIntParser<Output extends unknown>(digits: number, base: number, setter: AssignableField<Output, number>, name: string): ParserStructure<Output>;
    static SignedIntParser<Output extends unknown>(minDigits: number | null, maxDigits: number | null, spacePadding: number | null, setter: AssignableField<Output, number>, name: string, plusOnExceedsWidth: number | null): ParserStructure<Output>;
    static spaceAndZeroPaddedUnsignedInt<Target extends unknown>(minDigits: number | null, maxDigits: number | null, spacePadding: number | null, setter: AssignableField<Target, number>, name: string, withMinus: boolean): ParserStructure<Target>;
}