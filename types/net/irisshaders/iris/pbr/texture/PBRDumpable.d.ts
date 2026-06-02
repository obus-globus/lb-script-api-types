import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Dumpable } from '../../../../../net/minecraft/client/renderer/texture/Dumpable.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface PBRDumpable extends Object, Dumpable{
    getDefaultDumpLocation(): Identifier;
}