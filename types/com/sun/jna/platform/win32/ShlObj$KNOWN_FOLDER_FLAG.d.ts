import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ShlObj$KNOWN_FOLDER_FLAG extends Enum<ShlObj$KNOWN_FOLDER_FLAG> {
    static ALIAS_ONLY: ShlObj$KNOWN_FOLDER_FLAG;
    static CREATE: ShlObj$KNOWN_FOLDER_FLAG;
    static DEFAULT_PATH: ShlObj$KNOWN_FOLDER_FLAG;
    static DONT_UNEXPAND: ShlObj$KNOWN_FOLDER_FLAG;
    static DONT_VERIFY: ShlObj$KNOWN_FOLDER_FLAG;
    static INIT: ShlObj$KNOWN_FOLDER_FLAG;
    static NONE: ShlObj$KNOWN_FOLDER_FLAG;
    static NOT_PARENT_RELATIVE: ShlObj$KNOWN_FOLDER_FLAG;
    static NO_ALIAS: ShlObj$KNOWN_FOLDER_FLAG;
    static NO_APPCONTAINER_REDIRECTION: ShlObj$KNOWN_FOLDER_FLAG;
    static SIMPLE_IDLIST: ShlObj$KNOWN_FOLDER_FLAG;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShlObj$KNOWN_FOLDER_FLAG;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    readonly flag: number;
    getFlag(): number;
    name(): "NONE" | "SIMPLE_IDLIST" | "NOT_PARENT_RELATIVE" | "DEFAULT_PATH" | "INIT" | "NO_ALIAS" | "DONT_UNEXPAND" | "DONT_VERIFY" | "CREATE" | "NO_APPCONTAINER_REDIRECTION" | "ALIAS_ONLY";
}