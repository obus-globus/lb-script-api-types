import type { Object } from '../../java/lang/Object.d.ts'
import type { Version$BuildType } from '../../org/lwjgl/Version$BuildType.d.ts'
export class Version extends Object {
    static BUILD_TYPE: Version$BuildType;
    static VERSION_MAJOR: number;
    static VERSION_MINOR: number;
    static VERSION_REVISION: number;
    static getVersion(): string;
    static main(paramarg0: string[]): void;
    private constructor()
}