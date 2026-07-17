import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContactInformation } from '../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
export class MapBackedContactInformation extends Object implements ContactInformation {
    static EMPTY: ContactInformation;
    constructor(arg0: JavaMap<string, string>)
    // private map: JavaMap<string, string>;
    asMap(): JavaMap<string, string>;
    get(arg0: string): Optional<string>;
}