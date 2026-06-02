import type { ByteQuadsCanonicalizer$TableInfo } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/ByteQuadsCanonicalizer$TableInfo.d.ts'
import type { AtomicReference } from '../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ByteQuadsCanonicalizer extends Object {
    static createRoot(): ByteQuadsCanonicalizer;
    private constructor(arg0: ByteQuadsCanonicalizer, arg1: number, arg2: ByteQuadsCanonicalizer$TableInfo, arg3: boolean, arg4: boolean)
    private constructor(arg0: number, arg1: number)
    // private _count: number;
    // private _failOnDoS: boolean;
    // private _hashArea: number[];
    // private _hashShared: boolean;
    // private _hashSize: number;
    // private _intern: boolean;
    // private _longNameOffset: number;
    // private _names: string[];
    // private _parent: ByteQuadsCanonicalizer;
    // private _secondaryStart: number;
    // private _seed: number;
    // private _spilloverEnd: number;
    // private _tableInfo: AtomicReference<ByteQuadsCanonicalizer$TableInfo>;
    // private _tertiaryShift: number;
    // private _tertiaryStart: number;
    // private _appendLongName(arg0: number[], arg1: number): number;
    // private _calcOffset(arg0: number): number;
    // private _checkNeedForRehash(): boolean;
    // private _findOffsetForAdd(arg0: number): number;
    // private _findSecondary(arg0: number, arg1: number): string;
    // private _findSecondary(arg0: number, arg1: number, arg2: number): string;
    // private _findSecondary(arg0: number, arg1: number, arg2: number, arg3: number): string;
    // private _findSecondary(arg0: number, arg1: number, arg2: number[], arg3: number): string;
    // private _reportTooManyCollisions(): void;
    // private _resizeAndFindOffsetForAdd(arg0: number): number;
    // private _spilloverStart(): number;
    // private _verifyLongName(arg0: number[], arg1: number, arg2: number): boolean;
    // private _verifyLongName2(arg0: number[], arg1: number, arg2: number): boolean;
    // private _verifySharing(): void;
    addName(arg0: string, arg1: number[], arg2: number): string;
    calcHash(arg0: number): number;
    calcHash(arg0: number, arg1: number): number;
    calcHash(arg0: number, arg1: number, arg2: number): number;
    calcHash(arg0: number[], arg1: number): number;
    findName(arg0: number): string;
    findName(arg0: number, arg1: number): string;
    findName(arg0: number, arg1: number, arg2: number): string;
    findName(arg0: number[], arg1: number): string;
    makeChild(arg0: number): ByteQuadsCanonicalizer;
    maybeDirty(): boolean;
    // private mergeChild(arg0: ByteQuadsCanonicalizer$TableInfo): void;
    // private nukeSymbols(arg0: boolean): void;
    primaryCount(): number;
    // private rehash(): void;
    release(): void;
    secondaryCount(): number;
    size(): number;
    spilloverCount(): number;
    tertiaryCount(): number;
    toString(): string;
    totalCount(): number;
}