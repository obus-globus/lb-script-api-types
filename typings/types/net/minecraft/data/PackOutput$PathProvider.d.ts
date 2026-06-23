import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PackOutput } from '../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$Target } from '../../../net/minecraft/data/PackOutput$Target.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class PackOutput$PathProvider extends Object {
    constructor(output: PackOutput, target: PackOutput$Target, kind: string)
    kind: string;
    root: Path[];
    file(element: Identifier, extension: string): Path[];
    json(element: Identifier): Path[];
    json(element: ResourceKey<Object>): Path[];
}