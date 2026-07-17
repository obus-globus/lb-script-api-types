import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { V1ModMetadata$IconEntry } from '../../../../../net/fabricmc/loader/impl/metadata/V1ModMetadata$IconEntry.d.ts'
export class V1ModMetadata$MapEntry extends Object implements V1ModMetadata$IconEntry {
    constructor(arg0: JavaMap<number, string>)
    // private icons: JavaMap<number, string>;
    getIconPath(arg0: number): Optional<string>;
}