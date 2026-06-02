import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NestedJarEntry } from '../../../../../net/fabricmc/loader/impl/metadata/NestedJarEntry.d.ts'
export class V1ModMetadata$JarEntry extends Object implements NestedJarEntry {
    constructor(arg0: string)
    readonly file: string;
    getFile(): string;
}