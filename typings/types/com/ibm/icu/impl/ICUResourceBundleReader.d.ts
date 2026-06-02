import type { ICUResourceBundleReader$Array } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$Array.d.ts'
import type { ICUResourceBundleReader$ResourceCache } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$ResourceCache.d.ts'
import type { ICUResourceBundleReader$Table } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$Table.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class ICUResourceBundleReader extends Object {
    static getFullName(paramarg0: string, paramarg1: string): string;
    private constructor()
    private constructor(arg0: ByteBuffer, arg1: string, arg2: string, arg3: ClassLoader)
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
    // private compareKeys(arg0: CharSequence, arg1: string): number;
    // private compareKeys32(arg0: CharSequence, arg1: number): number;
    getAlias(arg0: number): string;
    getArray(arg0: number): ICUResourceBundleReader$Array;
    getBinary(arg0: number): ByteBuffer;
    getBinary(arg0: number, arg1: number[]): number[];
    // private getChars(arg0: number, arg1: number): string[];
    // private getIndexesInt(arg0: number): number;
    // private getInt(arg0: number): number;
    getIntVector(arg0: number): number[];
    // private getInts(arg0: number, arg1: number): number[];
    // private getKey16String(arg0: number): string;
    // private getKey32String(arg0: number): string;
    getNoFallback(): boolean;
    // private getResourceByteOffset(arg0: number): number;
    getRootResource(): number;
    getString(arg0: number): string;
    getStringV2(arg0: number): string;
    getTable(arg0: number): ICUResourceBundleReader$Table;
    // private getTable16KeyOffsets(arg0: number): string[];
    // private getTable32KeyOffsets(arg0: number): number[];
    // private getTableKeyOffsets(arg0: number): string[];
    getUsesPoolBundle(): boolean;
    getVersion(): VersionInfo;
    // private init(arg0: ByteBuffer): void;
    // private isNoInheritanceMarker(arg0: number): boolean;
    // private isStringV2NoInheritanceMarker(arg0: number): boolean;
    // private makeStringFromBytes(arg0: number, arg1: number): string;
    // private setKeyFromKey16(arg0: number, arg1: UResource$Key): void;
    // private setKeyFromKey32(arg0: number, arg1: UResource$Key): void;
}