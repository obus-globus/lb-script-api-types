import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SemanticVersion } from '../../../../../net/fabricmc/loader/api/SemanticVersion.d.ts'
export class FabricMixinVersions$LoaderMixinVersionEntry extends Object {
    private constructor(arg0: SemanticVersion, arg1: number)
    loaderVersion: SemanticVersion;
    mixinVersion: number;
}