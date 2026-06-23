import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class IrisConfig extends Object {
    constructor(arg0: Path[], arg1: Path[])
    // private allowUnknownShaders: boolean;
    // private disableUpdateMessage: boolean;
    // private enableDebugOptions: boolean;
    // private enableShaders: boolean;
    // private excludedPath: Path[];
    // private propertiesPath: Path[];
    readonly shaderPackName: string;
    // private shadersToSkip: Identifier[];
    areDebugOptionsEnabled(): boolean;
    areShadersEnabled(): boolean;
    getShaderPackName(): Optional<string>;
    initialize(): void;
    isInternal(): boolean;
    load(): void;
    save(): void;
    setDebugEnabled(arg0: boolean): void;
    setShaderPackName(arg0: string): void;
    setShadersEnabled(arg0: boolean): void;
    setUnknown(arg0: boolean): void;
    shouldAllowUnknownShaders(): boolean;
    shouldDisableUpdateMessage(): boolean;
    shouldSkip(arg0: Identifier): boolean;
}