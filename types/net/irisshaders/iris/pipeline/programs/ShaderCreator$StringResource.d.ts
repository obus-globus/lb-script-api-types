import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export class ShaderCreator$StringResource extends Resource {
    private constructor(arg0: Identifier, arg1: string)
    // private content: string;
    open(): InputStream;
}