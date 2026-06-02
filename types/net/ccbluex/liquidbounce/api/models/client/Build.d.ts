import type { OffsetDateTime } from '../../../../../../java/time/OffsetDateTime.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Build extends Object {
    constructor(buildId: number, commitId: string, branch: string, lbVersion: string, mcVersion: string, release: boolean, date: OffsetDateTime, message: string, url: string)
    readonly branch: string;
    readonly buildId: number;
    readonly commitId: string;
    readonly date: OffsetDateTime;
    readonly lbVersion: string;
    readonly mcVersion: string;
    readonly message: string;
    readonly release: boolean;
    readonly url: string;
    component1(): number;
    component2(): string;
    component3(): string;
    component4(): string;
    component5(): string;
    component6(): boolean;
    component7(): OffsetDateTime;
    component8(): string;
    component9(): string;
    copy(buildId: number, commitId: string, branch: string, lbVersion: string, mcVersion: string, release: boolean, date: OffsetDateTime, message: string, url: string): Build;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}