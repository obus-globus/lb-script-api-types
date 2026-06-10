import type { DefaultTypeMapper$Entry } from '../../../com/sun/jna/DefaultTypeMapper$Entry.d.ts'
import type { FromNativeConverter } from '../../../com/sun/jna/FromNativeConverter.d.ts'
import type { ToNativeConverter } from '../../../com/sun/jna/ToNativeConverter.d.ts'
import type { TypeConverter } from '../../../com/sun/jna/TypeConverter.d.ts'
import type { TypeMapper } from '../../../com/sun/jna/TypeMapper.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultTypeMapper extends Object implements TypeMapper {
    constructor()
    // private fromNativeConverters: DefaultTypeMapper$Entry[];
    // private toNativeConverters: DefaultTypeMapper$Entry[];
    addFromNativeConverter(arg0: Class<Object>, arg1: FromNativeConverter): void;
    addToNativeConverter(arg0: Class<Object>, arg1: ToNativeConverter): void;
    addTypeConverter(arg0: Class<Object>, arg1: TypeConverter): void;
    // private getAltClass(arg0: Class<Object>): Class<Object>;
    getFromNativeConverter(arg0: Class<Object>): FromNativeConverter;
    getToNativeConverter(arg0: Class<Object>): ToNativeConverter;
    // private lookupConverter(arg0: Class<Object>, arg1: DefaultTypeMapper$Entry[]): Object;
}