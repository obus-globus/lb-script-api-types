import type { Transform } from '../../../../com/ibm/icu/text/Transform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StringTransform extends Transform<string, string>, Object{
    transform(arg0: string): string;
}