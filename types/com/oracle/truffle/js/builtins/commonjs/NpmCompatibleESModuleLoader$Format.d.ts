import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NpmCompatibleESModuleLoader$Format extends Enum<NpmCompatibleESModuleLoader$Format> {
    static CommonJS: NpmCompatibleESModuleLoader$Format;
    static ESM: NpmCompatibleESModuleLoader$Format;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NpmCompatibleESModuleLoader$Format;
    static values(): (Object | null)[];
    private constructor()
    name(): "CommonJS" | "ESM";
}