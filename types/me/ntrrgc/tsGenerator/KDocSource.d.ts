import type { Object } from '../../../java/lang/Object.d.ts'
import type { Regex } from '../../../kotlin/text/Regex.d.ts'
import type { KDocSource$Companion } from '../../../me/ntrrgc/tsGenerator/KDocSource$Companion.d.ts'
import type { KDocSource$Entry } from '../../../me/ntrrgc/tsGenerator/KDocSource$Entry.d.ts'
export class KDocSource extends Object {
    static Companion: KDocSource$Companion;
    static MANIFEST_SCHEMA_VERSION: number;
    private constructor(entries: { [key: string]: KDocSource$Entry[] })
    // private KDOC_LINK_RE: Regex;
    // private entries: { [key: string]: KDocSource$Entry[] };
    // private buildTsdoc(entry: KDocSource$Entry, indent: string): string;
    // private kdocLinksToTsdoc(text: string): string;
    size(): number;
    tsdocForFqn(fqn: string, indent: string): string | null;
}