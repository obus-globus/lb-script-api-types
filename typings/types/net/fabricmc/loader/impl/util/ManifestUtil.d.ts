import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Attributes$Name } from '../../../../../java/util/jar/Attributes$Name.d.ts'
import type { Manifest } from '../../../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ManifestUtil extends Object {
    static getClassPath(paramarg0: Manifest, paramarg1: Path): URL[];
    static getManifestValue(paramarg0: Manifest, paramarg1: Attributes$Name): string;
    static readManifest(paramarg0: Class<Object>): Manifest;
    static readManifest(paramarg0: Path): Manifest;
    static readManifestFromBasePath(paramarg0: Path): Manifest;
    constructor()
}