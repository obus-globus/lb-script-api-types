import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProgramSet } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { IndirectPointer } from '../../../../../net/irisshaders/iris/shaderpack/properties/IndirectPointer.d.ts'
import type { ShaderProperties } from '../../../../../net/irisshaders/iris/shaderpack/properties/ShaderProperties.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector3i } from '../../../../../org/joml/Vector3i.d.ts'
export class ComputeSource extends Object {
    constructor(arg0: string, arg1: string, arg2: ProgramSet, arg3: ShaderProperties)
    readonly indirectPointer: IndirectPointer;
    readonly name: string;
    readonly parent: ProgramSet;
    readonly source: string;
    readonly workGroupRelative: Vector2f;
    readonly workGroups: Vector3i;
    getIndirectPointer(): IndirectPointer;
    getName(): string;
    getParent(): ProgramSet;
    getSource(): Optional<string>;
    getWorkGroupRelative(): Vector2f;
    getWorkGroups(): Vector3i;
    isValid(): boolean;
    requireValid(): Optional<ComputeSource>;
    setWorkGroupRelative(arg0: Vector2f): void;
    setWorkGroups(arg0: Vector3i): void;
}