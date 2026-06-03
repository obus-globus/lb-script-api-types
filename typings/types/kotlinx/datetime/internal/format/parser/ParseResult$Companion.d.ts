import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
export class ParseResult$Companion extends Object {
    Error(position: number, message: () => string): ParseResult;
    Ok(indexOfNextUnparsed: number): ParseResult;
}