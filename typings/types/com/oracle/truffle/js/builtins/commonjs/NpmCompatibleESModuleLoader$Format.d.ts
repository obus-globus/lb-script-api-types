import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NpmCompatibleESModuleLoader$Format extends Enum<NpmCompatibleESModuleLoader$Format> {
    static CommonJS: NpmCompatibleESModuleLoader$Format;
    static ESM: NpmCompatibleESModuleLoader$Format;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NpmCompatibleESModuleLoader$Format;
    static values(): NpmCompatibleESModuleLoader$Format[];
    private constructor()
    name(): "CommonJS" | "ESM";
}