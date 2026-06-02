import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ValidIdentifiers$Datasubtype extends Enum<ValidIdentifiers$Datasubtype> {
    static deprecated: ValidIdentifiers$Datasubtype;
    static macroregion: ValidIdentifiers$Datasubtype;
    static private_use: ValidIdentifiers$Datasubtype;
    static regular: ValidIdentifiers$Datasubtype;
    static reserved: ValidIdentifiers$Datasubtype;
    static special: ValidIdentifiers$Datasubtype;
    static unknown: ValidIdentifiers$Datasubtype;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ValidIdentifiers$Datasubtype;
    static values(): (Object | null)[];
    private constructor()
    name(): "deprecated" | "private_use" | "regular" | "special" | "unknown" | "macroregion" | "reserved";
}