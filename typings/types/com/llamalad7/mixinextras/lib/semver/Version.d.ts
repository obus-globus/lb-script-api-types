import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class Version extends Object implements Serializable, Comparable<Version> {
    static BUILD_AWARE_ORDER: (param0: Object) => boolean;
    static INCREMENT_ORDER: (param0: Object) => boolean;
    static PRECEDENCE_ORDER: (param0: Object) => boolean;
    static parse(paramarg0: string): Version;
    static parse(paramarg0: string, paramarg1: boolean): Version;
    static tryParse(paramarg0: string): Optional<Version>;
    static tryParse(paramarg0: string, paramarg1: boolean): Optional<Version>;
    constructor(arg0: number, arg1: number, arg2: number, arg3: string[], arg4: string[])
    // private buildIds: string[];
    // private major: number;
    // private minor: number;
    // private patch: number;
    // private preReleaseIds: string[];
    buildMetadata(): Optional<string>;
    compareTo(arg0: Version): number;
    compareToIgnoreBuildMetadata(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isHigherThan(arg0: Version): boolean;
    preReleaseVersion(): Optional<string>;
    toString(): string;
}