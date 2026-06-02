import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompactMediaTypeIdConverter extends Object implements Converter<string, Object> {
    static INSTANCE: Converter<string, Object>;
    constructor()
    applyFrom(arg0: Object): string;
    applyTo(arg0: string): Object;
}