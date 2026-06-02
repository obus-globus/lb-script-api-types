import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegionFileVersion$StreamWrapper } from '../../../../../../net/minecraft/world/level/chunk/storage/RegionFileVersion$StreamWrapper.d.ts'
export class RegionFileVersion extends Object {
    static DEFAULT: RegionFileVersion;
    static VERSION_CUSTOM: RegionFileVersion;
    static VERSION_DEFLATE: RegionFileVersion;
    static VERSION_GZIP: RegionFileVersion;
    static VERSION_LZ4: RegionFileVersion;
    static VERSION_NONE: RegionFileVersion;
    static configure(paramoptionName: string): void;
    static fromId(paramid: number): RegionFileVersion;
    static getSelected(): RegionFileVersion;
    static isValidVersion(paramversion: number): boolean;
    private constructor(id: number, optionName: string, inputWrapper: (param0: InputStream) => unknown, outputWrapper: (param0: OutputStream) => unknown)
    readonly id: number;
    // private inputWrapper: (param0: InputStream) => unknown;
    // private optionName: string;
    // private outputWrapper: (param0: OutputStream) => unknown;
    getId(): number;
    wrap(is: InputStream): InputStream;
    wrap(is: OutputStream): OutputStream;
}