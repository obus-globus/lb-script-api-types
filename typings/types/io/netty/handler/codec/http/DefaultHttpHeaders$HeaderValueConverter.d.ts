import type { CharSequenceValueConverter } from '../../../../../io/netty/handler/codec/CharSequenceValueConverter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class DefaultHttpHeaders$HeaderValueConverter extends CharSequenceValueConverter {
    static INSTANCE: CharSequenceValueConverter;
    private constructor()
    convertObject(arg0: Object): CharSequence;
}