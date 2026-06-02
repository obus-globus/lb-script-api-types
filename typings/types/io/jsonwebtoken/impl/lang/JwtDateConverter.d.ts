import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JwtDateConverter extends Object implements Converter<Date, Object> {
    static INSTANCE: JwtDateConverter;
    static toDate(paramarg0: Object): Date;
    static toSpecDate(paramarg0: Object): Date;
    constructor()
    applyFrom(arg0: Object): Date;
    applyTo(arg0: Date): Object;
}