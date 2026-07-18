import type { ParseResult } from '../../../../io/ktor/http/parsing/ParseResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Parser extends Object{
    match(input: string): boolean;
    parse(input: string): ParseResult | null;
}