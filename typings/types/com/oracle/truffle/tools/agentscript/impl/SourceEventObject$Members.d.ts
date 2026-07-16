import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SourceEventObject$Members extends Enum<SourceEventObject$Members> {
    static characters: SourceEventObject$Members;
    static language: SourceEventObject$Members;
    static mimeType: SourceEventObject$Members;
    static name: SourceEventObject$Members;
    static uri: SourceEventObject$Members;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SourceEventObject$Members;
    static values(): SourceEventObject$Members[];
    private constructor()
    name(): "characters" | "name" | "language" | "mimeType" | "uri";
}