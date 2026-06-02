import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SourceEventObject$Members extends Enum<SourceEventObject$Members> {
    static characters: SourceEventObject$Members;
    static language: SourceEventObject$Members;
    static mimeType: SourceEventObject$Members;
    static name: SourceEventObject$Members;
    static uri: SourceEventObject$Members;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SourceEventObject$Members;
    static values(): (Object | null)[];
    private constructor()
    name(): "characters" | "name" | "language" | "mimeType" | "uri";
}