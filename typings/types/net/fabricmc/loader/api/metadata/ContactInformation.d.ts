import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ContactInformation extends Object{
    asMap(): { [key: string]: string };
    get(arg0: string): Optional<string>;
}