import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class Version extends Object implements Serializable, Comparable<Version> {
    static unknownVersion(): Version;
    constructor(arg0: number, arg1: number, arg2: number, arg3: string)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: string)
    // private _artifactId: string;
    // private _groupId: string;
    // private _majorVersion: number;
    // private _minorVersion: number;
    // private _patchLevel: number;
    // private _snapshotInfo: string;
    compareTo(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isSnapshot(): boolean;
    isUknownVersion(): boolean;
    isUnknownVersion(): boolean;
    toString(): string;
}