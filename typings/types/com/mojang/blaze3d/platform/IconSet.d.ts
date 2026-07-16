import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export class IconSet extends Enum<IconSet> {
    static RELEASE: IconSet;
    static SNAPSHOT: IconSet;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): IconSet;
    static values(): IconSet[];
    private constructor(...path: string[])
    // private path: string[];
    // private getFile(resources: PackResources, fileName: string): () => InputStream;
    getMacIcon(resources: PackResources): () => InputStream;
    getStandardIcons(resources: PackResources): () => InputStream[];
    name(): "RELEASE" | "SNAPSHOT";
}