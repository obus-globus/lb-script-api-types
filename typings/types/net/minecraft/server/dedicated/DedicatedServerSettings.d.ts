import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DedicatedServerProperties } from '../../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
export class DedicatedServerSettings extends Object {
    constructor(source: Path)
    readonly properties: DedicatedServerProperties;
    // private source: Path;
    forceSave(): void;
    getProperties(): DedicatedServerProperties;
    update(mutator: (param0: DedicatedServerProperties) => DedicatedServerProperties): DedicatedServerSettings;
}