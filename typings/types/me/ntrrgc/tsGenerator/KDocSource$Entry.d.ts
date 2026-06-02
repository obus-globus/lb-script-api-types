import type { Object } from '../../../java/lang/Object.d.ts'
import type { KDocSource$Source } from '../../../me/ntrrgc/tsGenerator/KDocSource$Source.d.ts'
export class KDocSource$Entry extends Object {
    constructor(doc: string | null, kind: string | null, source: KDocSource$Source | null, params: { [key: string]: string } | null, returns: string | null, deprecated: string | null, since: string | null, see: string[] | null, sample: string | null, authors: string[] | null, anticheat: string | null, anticheatVersion: string | null, testedOn: string | null, notes: string[] | null)
    readonly anticheat: string | null;
    readonly anticheatVersion: string | null;
    readonly authors: string[] | null;
    readonly deprecated: string | null;
    readonly doc: string | null;
    readonly kind: string | null;
    readonly notes: string[] | null;
    readonly params: { [key: string]: string } | null;
    readonly returns: string | null;
    readonly sample: string | null;
    readonly see: string[] | null;
    readonly since: string | null;
    readonly source: KDocSource$Source | null;
    readonly testedOn: string | null;
    component1(): string | null;
    component10(): string[] | null;
    component11(): string | null;
    component12(): string | null;
    component13(): string | null;
    component14(): string[] | null;
    component2(): string | null;
    component3(): KDocSource$Source | null;
    component4(): { [key: string]: string } | null;
    component5(): string | null;
    component6(): string | null;
    component7(): string | null;
    component8(): string[] | null;
    component9(): string | null;
    copy(doc: string | null, kind: string | null, source: KDocSource$Source | null, params: { [key: string]: string } | null, returns: string | null, deprecated: string | null, since: string | null, see: string[] | null, sample: string | null, authors: string[] | null, anticheat: string | null, anticheatVersion: string | null, testedOn: string | null, notes: string[] | null): KDocSource$Entry;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}