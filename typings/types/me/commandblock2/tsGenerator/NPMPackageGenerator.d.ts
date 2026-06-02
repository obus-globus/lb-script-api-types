import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypeScriptGenerator } from '../../../me/ntrrgc/tsGenerator/TypeScriptGenerator.d.ts'
export class NPMPackageGenerator extends Object {
    constructor(typeScriptGenerator: TypeScriptGenerator, packageName: string, version: string, extraFiles: string, extraTypesVersion: string, otherExtras: string, customTypesVersionsJson: string | null)
    readonly packageJson: string;
    readonly packageName: string;
    readonly tsConfig: string;
    readonly typeScriptGenerator: TypeScriptGenerator;
    readonly typesFolder: string;
    readonly version: string;
    writePackageTo(path: Path[][]): void;
}