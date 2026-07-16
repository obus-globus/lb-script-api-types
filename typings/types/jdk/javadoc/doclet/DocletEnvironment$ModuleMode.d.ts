import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class DocletEnvironment$ModuleMode extends Enum<DocletEnvironment$ModuleMode> {
    static ALL: DocletEnvironment$ModuleMode;
    static API: DocletEnvironment$ModuleMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DocletEnvironment$ModuleMode;
    static values(): DocletEnvironment$ModuleMode[];
    private constructor()
    name(): "API" | "ALL";
}