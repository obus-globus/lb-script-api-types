import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ContactInformation extends Object{
    asMap(): JavaMap<string, string>;
    get(arg0: string): Optional<string>;
}