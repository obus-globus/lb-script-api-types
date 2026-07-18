import type { HeaderValueWithParameters } from '../../../io/ktor/http/HeaderValueWithParameters.d.ts'
import type { StringValuesBuilder } from '../../../io/ktor/util/StringValuesBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HeaderValueWithParametersKt extends Object {
    static append(self: StringValuesBuilder, name: string, value: HeaderValueWithParameters): void;
    static escapeIfNeeded(self: string): string;
    static isQuoted(self: string): boolean;
    static quote(self: string): string;
}