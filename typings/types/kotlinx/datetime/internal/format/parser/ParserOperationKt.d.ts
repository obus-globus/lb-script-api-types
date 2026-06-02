import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { ParserStructure } from '../../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class ParserOperationKt extends Object {
    static ReducedIntParser(paramarg0: number, paramarg1: number, paramarg2: AssignableField<Object, number>, paramarg3: string): ParserStructure<Object>;
    static SignedIntParser(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: AssignableField<Object, number>, paramarg4: string, paramarg5: number): ParserStructure<Object>;
    static spaceAndZeroPaddedUnsignedInt(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: AssignableField<Object, number>, paramarg4: string, paramarg5: boolean): ParserStructure<Object>;
}