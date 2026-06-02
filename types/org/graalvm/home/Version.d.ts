import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class Version extends Object implements Comparable<Version> {
    static create(paramversions: number[]): Version;
    static getCurrent(): Version;
    static parse(paramversionString: string): Version;
    constructor(versions: number[])
    constructor(v: string)
    readonly snapshot: boolean;
    // private suffix: string;
    // private versions: number[];
    compareTo(compareVersions: number[]): number;
    compareTo(o: Version): number;
    equals(obj: Object | null): boolean;
    format(format: string): string;
    getComponent(componentIndex: number): number;
    hashCode(): number;
    isRelease(): boolean;
    isSnapshot(): boolean;
    // private processFormat(format: string): string;
    toString(): string;
}