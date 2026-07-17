import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../org/graalvm/home/Version.d.ts'
export class TruffleVersions extends Object {
    static MAX_JDK_VERSION: number;
    static MIN_COMPILER_VERSION: Version;
    static MIN_JDK_VERSION: number;
    static NEXT_VERSION_UPDATE: Version;
    static TRUFFLE_API_VERSION: Version;
    static isVersionCheckEnabled(): boolean;
    static readTruffleAPIVersion(): Version;
    private constructor()
}