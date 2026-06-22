import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Parameter<T extends Object | number | string | boolean> extends Identifiable, Converter<T, Object>, Object{
    cast(arg0: Object): T;
    getId(): string;
    getName(): string;
    isSecret(): boolean;
    supports(arg0: Object): boolean;
}