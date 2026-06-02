import type { DumperOptions$Version } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$Version.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VersionTagsTuple extends Object {
    constructor(arg0: DumperOptions$Version, arg1: { [key: string]: string })
    readonly tags: { [key: string]: string };
    readonly version: DumperOptions$Version;
    getTags(): { [key: string]: string };
    getVersion(): DumperOptions$Version;
    toString(): string;
}