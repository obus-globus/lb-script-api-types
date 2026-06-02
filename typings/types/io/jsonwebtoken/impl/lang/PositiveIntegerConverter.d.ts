import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PositiveIntegerConverter extends Object implements Converter<number, Object> {
    static INSTANCE: PositiveIntegerConverter;
    constructor()
    applyFrom(arg0: Object): number;
    applyTo(arg0: number): Object;
}