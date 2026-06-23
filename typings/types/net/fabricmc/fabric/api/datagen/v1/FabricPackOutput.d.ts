import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { ModContainer } from '../../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { PackOutput } from '../../../../../../net/minecraft/data/PackOutput.d.ts'
export class FabricPackOutput extends PackOutput {
    constructor(arg0: ModContainer, arg1: Path[], arg2: boolean)
    readonly modContainer: ModContainer;
    // private strictValidation: boolean;
    getModContainer(): ModContainer;
    getModId(): string;
    isStrictValidationEnabled(): boolean;
}