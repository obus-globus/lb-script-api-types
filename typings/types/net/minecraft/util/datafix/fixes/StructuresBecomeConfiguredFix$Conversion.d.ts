import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StructuresBecomeConfiguredFix$Conversion extends Record {
    static biomeMapped(parammapping: JavaMap<string[], string>, paramfallback: string): StructuresBecomeConfiguredFix$Conversion;
    static trivial(paramresult: string): StructuresBecomeConfiguredFix$Conversion;
    private constructor(biomeMapping: JavaMap<string, string>, fallback: string)
    // private biomeMapping: JavaMap<string, string>;
    // private fallback: string;
    biomeMapping(): JavaMap<string, string>;
    equals(o: Object | null): boolean;
    fallback(): string;
    hashCode(): number;
    toString(): string;
}