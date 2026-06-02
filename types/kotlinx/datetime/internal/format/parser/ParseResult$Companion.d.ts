import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
export class ParseResult$Companion extends Object {
    Error(position: number, message: Function0<string>): ParseResult;
    Ok(indexOfNextUnparsed: number): ParseResult;
}