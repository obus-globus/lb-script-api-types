import type { Version } from '../../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class VersionUtil extends Object {
    static mavenVersionFor(paramarg0: ClassLoader, paramarg1: string, paramarg2: string): Version;
    static packageVersionFor(paramarg0: Class<Object>): Version;
    static parseVersion(paramarg0: string, paramarg1: string, paramarg2: string): Version;
    static throwInternal(): void;
    static versionFor(paramarg0: Class<Object>): Version;
    constructor()
    version(): Version;
}