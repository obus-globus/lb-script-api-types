import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VersionRequirement$Version$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirement$Version$Companion.d.ts'
export class VersionRequirement$Version extends Object {
    static Companion: VersionRequirement$Version$Companion;
    static INFINITY: VersionRequirement$Version;
    constructor(arg0: number, arg1: number, arg2: number)
    // private major: number;
    // private minor: number;
    // private patch: number;
    asString(): string;
    component1(): number;
    component2(): number;
    component3(): number;
    encode(arg0: (param0: number) => void, arg1: (param0: number) => void): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}