import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContactInformation } from '../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
export class MapBackedContactInformation extends Object implements ContactInformation {
    static EMPTY: ContactInformation;
    constructor(arg0: { [key: string]: string })
    // private map: { [key: string]: string };
    asMap(): { [key: string]: string };
    get(arg0: string): Optional<string>;
}