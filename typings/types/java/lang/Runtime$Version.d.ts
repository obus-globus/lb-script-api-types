import type { Optional } from '../../java/util/Optional.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class Runtime$Version extends Object implements Comparable<Runtime$Version> {
    static parse(paramarg0: string): Runtime$Version;
    private constructor(arg0: number[], arg1: Optional<string>, arg2: Optional<number>, arg3: Optional<string>)
    // private build: Optional<number>;
    // private optional: Optional<string>;
    // private pre: Optional<string>;
    // private version: number[];
    build(): Optional<number>;
    // private compare(arg0: Runtime$Version, arg1: boolean): number;
    // private compareBuild(arg0: Runtime$Version): number;
    // private compareOptional(arg0: Runtime$Version): number;
    // private comparePre(arg0: Runtime$Version): number;
    compareTo(arg0: Runtime$Version): number;
    compareToIgnoreOptional(arg0: Runtime$Version): number;
    // private compareVersion(arg0: Runtime$Version): number;
    equals(arg0: Object | null): boolean;
    equalsIgnoreOptional(arg0: Object): boolean;
    feature(): number;
    hashCode(): number;
    interim(): number;
    major(): number;
    minor(): number;
    optional(): Optional<string>;
    patch(): number;
    pre(): Optional<string>;
    security(): number;
    toString(): string;
    update(): number;
    version(): number[];
}