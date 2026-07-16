import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CEntryPoint$Publish extends Enum<CEntryPoint$Publish> {
    static NotPublished: CEntryPoint$Publish;
    static SymbolAndHeader: CEntryPoint$Publish;
    static SymbolOnly: CEntryPoint$Publish;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CEntryPoint$Publish;
    static values(): CEntryPoint$Publish[];
    private constructor()
    name(): "NotPublished" | "SymbolOnly" | "SymbolAndHeader";
}