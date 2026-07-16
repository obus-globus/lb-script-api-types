import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Dumpable } from '../../../../../net/minecraft/client/renderer/texture/Dumpable.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface PBRDumpable extends Object, Dumpable{
    dumpContents(selfId: Identifier, dir: Path): void;
    getDefaultDumpLocation(): Identifier;
}