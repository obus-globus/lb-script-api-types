import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Commands$ParseFunction extends Object{
    parse(value: StringReader): void;
}