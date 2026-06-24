import type { FabricMixinVersions$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SemanticVersion } from '../../../../../net/fabricmc/loader/api/SemanticVersion.d.ts'
export class FabricMixinVersions$LoaderMixinVersionEntry extends Object {
    private constructor(arg0: SemanticVersion, arg1: number)
    constructor(arg0: SemanticVersion, arg1: number, arg2: FabricMixinVersions$1)
    loaderVersion: SemanticVersion;
    mixinVersion: number;
}