import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Transform } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transform.d.ts'
export interface StringTransform extends Object, Transform<string, string>{
    transform(source: string): string;
}