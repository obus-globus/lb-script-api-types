import type { ReportEvidence } from '../../../../../com/mojang/authlib/minecraft/report/ReportEvidence.d.ts'
import type { ReportedEntity } from '../../../../../com/mojang/authlib/minecraft/report/ReportedEntity.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbuseReport extends Record {
    static chat(paramarg0: string, paramarg1: string, paramarg2: ReportEvidence, paramarg3: ReportedEntity, paramarg4: Instant): AbuseReport;
    static name(paramarg0: string, paramarg1: ReportedEntity, paramarg2: Instant): AbuseReport;
    static skin(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: ReportedEntity, paramarg4: Instant): AbuseReport;
    constructor(opinionComments: string, reason: string, evidence: ReportEvidence, skinUrl: string, reportedEntity: ReportedEntity, createdTime: Instant)
    // private createdTime: Instant;
    // private evidence: ReportEvidence;
    // private opinionComments: string;
    // private reason: string;
    // private reportedEntity: ReportedEntity;
    // private skinUrl: string;
    createdTime(): Instant;
    equals(arg0: Object | null): boolean;
    evidence(): ReportEvidence;
    hashCode(): number;
    opinionComments(): string;
    reason(): string;
    reportedEntity(): ReportedEntity;
    skinUrl(): string;
    toString(): string;
}