import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayStatus extends Enum<PlayStatus> {
    static LoginFailed_ClientOld: PlayStatus;
    static LoginFailed_EditionMismatchEduToVanilla: PlayStatus;
    static LoginFailed_EditionMismatchVanillaToEdu: PlayStatus;
    static LoginFailed_EditorMismatchEditorToVanilla: PlayStatus;
    static LoginFailed_EditorMismatchVanillaToEditor: PlayStatus;
    static LoginFailed_InvalidTenant: PlayStatus;
    static LoginFailed_ServerFullSubClient: PlayStatus;
    static LoginFailed_ServerOld: PlayStatus;
    static LoginSuccess: PlayStatus;
    static PlayerSpawn: PlayStatus;
    static getByName(paramarg0: string): PlayStatus;
    static getByName(paramarg0: string, paramarg1: PlayStatus): PlayStatus;
    static getByValue(paramarg0: number): PlayStatus;
    static getByValue(paramarg0: number, paramarg1: PlayStatus): PlayStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PlayStatus;
    static values(): PlayStatus[];
    private constructor(arg2: number)
    private constructor(arg2: PlayStatus)
    readonly value: number;
    getValue(): number;
    name(): "LoginSuccess" | "LoginFailed_ClientOld" | "LoginFailed_ServerOld" | "PlayerSpawn" | "LoginFailed_InvalidTenant" | "LoginFailed_EditionMismatchEduToVanilla" | "LoginFailed_EditionMismatchVanillaToEdu" | "LoginFailed_ServerFullSubClient" | "LoginFailed_EditorMismatchEditorToVanilla" | "LoginFailed_EditorMismatchVanillaToEditor";
}