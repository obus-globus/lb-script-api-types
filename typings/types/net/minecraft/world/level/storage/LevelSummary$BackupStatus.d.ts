import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LevelSummary$BackupStatus extends Enum<LevelSummary$BackupStatus> {
    static DOWNGRADE: LevelSummary$BackupStatus;
    static FILE_FIXING_REQUIRED: LevelSummary$BackupStatus;
    static NONE: LevelSummary$BackupStatus;
    static UPGRADE_TO_SNAPSHOT: LevelSummary$BackupStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LevelSummary$BackupStatus;
    static values(): LevelSummary$BackupStatus[];
    private constructor(shouldBackup: boolean, severe: boolean, translationKey: string)
    readonly severe: boolean;
    // private shouldBackup: boolean;
    readonly translationKey: string;
    getTranslationKey(): string;
    isSevere(): boolean;
    shouldBackup(): boolean;
    name(): "NONE" | "DOWNGRADE" | "UPGRADE_TO_SNAPSHOT" | "FILE_FIXING_REQUIRED";
}