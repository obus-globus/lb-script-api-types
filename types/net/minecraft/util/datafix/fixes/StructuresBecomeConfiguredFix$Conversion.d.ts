import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StructuresBecomeConfiguredFix$Conversion extends Record {
    static biomeMapped(parammapping: Map<Object | null, string>, paramfallback: string): StructuresBecomeConfiguredFix$Conversion;
    static trivial(paramresult: string): StructuresBecomeConfiguredFix$Conversion;
    private constructor(biomeMapping: { [key: string]: string }, fallback: string)
    // private biomeMapping: { [key: string]: string };
    // private fallback: string;
    biomeMapping(): { [key: string]: string };
    equals(o: Object | null): boolean;
    fallback(): string;
    hashCode(): number;
    toString(): string;
}