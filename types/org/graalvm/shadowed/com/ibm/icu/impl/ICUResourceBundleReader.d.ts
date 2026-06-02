import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { ICUResourceBundleReader$Array } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$Array.d.ts'
import type { ICUResourceBundleReader$ResourceCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$ResourceCache.d.ts'
import type { ICUResourceBundleReader$Table } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$Table.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export class ICUResourceBundleReader extends Object {
    static getFullName(parambaseName: string, paramlocaleName: string): string;
    private constructor()
    private constructor(inBytes: ByteBuffer, baseName: string, localeID: string, loader: ClassLoader)
    // private b16BitUnits: CharBuffer;
    // private bytes: ByteBuffer;
    // private dataVersion: number;
    // private isPoolBundle: boolean;
    // private keyBytes: number[];
    // private localKeyLimit: number;
    // private noFallback: boolean;
    // private poolBundleReader: ICUResourceBundleReader;
    // private poolCheckSum: number;
    // private poolStringIndex16Limit: number;
    // private poolStringIndexLimit: number;
    // private resourceCache: ICUResourceBundleReader$ResourceCache;
    // private rootRes: number;
    // private usesPoolBundle: boolean;
    // private compareKeys(key: CharSequence, keyOffset: string): number;
    // private compareKeys32(key: CharSequence, keyOffset: number): number;
    getAlias(res: number): string;
    getArray(res: number): ICUResourceBundleReader$Array;
    getBinary(res: number): ByteBuffer;
    getBinary(res: number, ba: number[]): number[];
    // private getChars(offset: number, count: number): string[];
    // private getIndexesInt(i: number): number;
    // private getInt(offset: number): number;
    getIntVector(res: number): number[];
    // private getInts(offset: number, count: number): number[];
    // private getKey16String(keyOffset: number): string;
    // private getKey32String(keyOffset: number): string;
    getNoFallback(): boolean;
    // private getResourceByteOffset(offset: number): number;
    getRootResource(): number;
    getString(res: number): string;
    getStringV2(res: number): string;
    getTable(res: number): ICUResourceBundleReader$Table;
    // private getTable16KeyOffsets(offset: number): string[];
    // private getTable32KeyOffsets(offset: number): number[];
    // private getTableKeyOffsets(offset: number): string[];
    getUsesPoolBundle(): boolean;
    getVersion(): VersionInfo;
    // private init(inBytes: ByteBuffer): void;
    // private isNoInheritanceMarker(res: number): boolean;
    // private isStringV2NoInheritanceMarker(offset: number): boolean;
    // private makeStringFromBytes(offset: number, length: number): string;
    // private setKeyFromKey16(keyOffset: number, key: UResource$Key): void;
    // private setKeyFromKey32(keyOffset: number, key: UResource$Key): void;
}