import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { V1ModMetadata$IconEntry } from '../../../../../net/fabricmc/loader/impl/metadata/V1ModMetadata$IconEntry.d.ts'
export class V1ModMetadata$Single extends Object implements V1ModMetadata$IconEntry {
    constructor(arg0: string)
    // private icon: string;
    getIconPath(arg0: number): Optional<string>;
}