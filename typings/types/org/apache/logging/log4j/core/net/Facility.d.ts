import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Facility extends Enum<Facility> {
    static AUTH: Facility;
    static AUTHPRIV: Facility;
    static CLOCK: Facility;
    static CRON: Facility;
    static DAEMON: Facility;
    static FTP: Facility;
    static KERN: Facility;
    static LOCAL0: Facility;
    static LOCAL1: Facility;
    static LOCAL2: Facility;
    static LOCAL3: Facility;
    static LOCAL4: Facility;
    static LOCAL5: Facility;
    static LOCAL6: Facility;
    static LOCAL7: Facility;
    static LOG_ALERT: Facility;
    static LOG_AUDIT: Facility;
    static LPR: Facility;
    static MAIL: Facility;
    static NEWS: Facility;
    static NTP: Facility;
    static SYSLOG: Facility;
    static USER: Facility;
    static UUCP: Facility;
    static toFacility(paramname: string): Facility;
    static toFacility(paramname: string, paramdefaultFacility: Facility): Facility;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Facility;
    static values(): Facility[];
    private constructor(code: number)
    readonly code: number;
    getCode(): number;
    isEqual(name: string): boolean;
    name(): "KERN" | "USER" | "MAIL" | "DAEMON" | "AUTH" | "SYSLOG" | "LPR" | "NEWS" | "UUCP" | "CRON" | "AUTHPRIV" | "FTP" | "NTP" | "LOG_AUDIT" | "LOG_ALERT" | "CLOCK" | "LOCAL0" | "LOCAL1" | "LOCAL2" | "LOCAL3" | "LOCAL4" | "LOCAL5" | "LOCAL6" | "LOCAL7";
}