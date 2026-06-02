import type { LocalDateTime } from '../../../../../../java/time/LocalDateTime.d.ts'
import type { DateTimeFormatter } from '../../../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AutoSettings$Companion } from '../../../../../../net/ccbluex/liquidbounce/api/models/client/AutoSettings$Companion.d.ts'
import type { AutoSettingsStatusType } from '../../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsStatusType.d.ts'
import type { AutoSettingsType } from '../../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsType.d.ts'
export class AutoSettings extends Object {
    static Companion: AutoSettings$Companion;
    static FORMATTER: DateTimeFormatter;
    constructor(settingId: string, name: string, type: AutoSettingsType, description: string, date: LocalDateTime, contributors: string, statusType: AutoSettingsStatusType, statusDate: LocalDateTime, serverAddress: string | null)
    readonly contributors: string;
    readonly date: LocalDateTime;
    readonly dateFormatted: string;
    readonly description: string;
    readonly name: string;
    readonly serverAddress: string | null;
    readonly settingId: string;
    readonly statusDate: LocalDateTime;
    readonly statusDateFormatted: string;
    readonly statusType: AutoSettingsStatusType;
    readonly type: AutoSettingsType;
    component1(): string;
    component2(): string;
    component3(): AutoSettingsType;
    component4(): string;
    component5(): LocalDateTime;
    component6(): string;
    component7(): AutoSettingsStatusType;
    component8(): LocalDateTime;
    component9(): string | null;
    copy(settingId: string, name: string, type: AutoSettingsType, description: string, date: LocalDateTime, contributors: string, statusType: AutoSettingsStatusType, statusDate: LocalDateTime, serverAddress: string | null): AutoSettings;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}