import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
import type { Severity } from '../../../../../../org/apache/logging/log4j/core/net/Severity.d.ts'
export class Priority extends Object {
    static getPriority(paramfacility: Facility, paramlevel: Level): number;
    constructor(facility: Facility, severity: Severity)
    readonly facility: Facility;
    readonly severity: Severity;
    getFacility(): Facility;
    getSeverity(): Severity;
    getValue(): number;
    toString(): string;
}