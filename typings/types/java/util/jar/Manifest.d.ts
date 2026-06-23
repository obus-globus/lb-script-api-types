import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { JarVerifier } from '../../../java/util/jar/JarVerifier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class Manifest extends Object implements Cloneable {
    constructor()
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: JarVerifier, arg1: InputStream, arg2: string)
    constructor(arg0: Manifest)
    // private attr: { [key: string]: any };
    readonly entries: { [key: string]: { [key: string]: any } };
    // private jv: JarVerifier;
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getAttributes(arg0: string): { [key: string]: any };
    getEntries(): { [key: string]: { [key: string]: any } };
    getMainAttributes(): { [key: string]: any };
    getTrustedAttributes(arg0: string): { [key: string]: any };
    hashCode(): number;
    // private parseName(arg0: number[], arg1: number): string;
    read(arg0: InputStream): void;
    // private read(arg0: InputStream, arg1: string): void;
    // private toLower(arg0: number): number;
    write(arg0: OutputStream): void;
}