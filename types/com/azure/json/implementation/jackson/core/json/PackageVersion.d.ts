import type { Version } from '../../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Versioned } from '../../../../../../../com/azure/json/implementation/jackson/core/Versioned.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PackageVersion extends Object implements Versioned {
    static VERSION: Version;
    constructor()
    version(): Version;
}