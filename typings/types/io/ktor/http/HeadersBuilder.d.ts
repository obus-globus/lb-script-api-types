import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { StringValuesBuilderImpl } from '../../../io/ktor/util/StringValuesBuilderImpl.d.ts'
export class HeadersBuilder extends StringValuesBuilderImpl {
    constructor(size?: number)
    build(): Headers;
    protected validateName(name: string): void;
    protected validateValue(value: string): void;
}