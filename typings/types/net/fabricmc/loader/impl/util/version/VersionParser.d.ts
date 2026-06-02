import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SemanticVersion } from '../../../../../../net/fabricmc/loader/api/SemanticVersion.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
export class VersionParser extends Object {
    static parse(paramarg0: string, paramarg1: boolean): Version;
    static parseSemantic(paramarg0: string): SemanticVersion;
    constructor()
}