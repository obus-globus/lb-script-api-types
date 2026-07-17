import type { JavaMap } from '../../../JavaMap.d.ts'
import type { MessageDigest } from '../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ManifestDigester$Entry } from '../../../sun/security/util/ManifestDigester$Entry.d.ts'
import type { ManifestDigester$Position } from '../../../sun/security/util/ManifestDigester$Position.d.ts'
export class ManifestDigester extends Object {
    static MF_MAIN_ATTRS: string;
    constructor(arg0: number[])
    // private entries: JavaMap<string, ManifestDigester$Entry>;
    readonly mainAttsEntry: ManifestDigester$Entry;
    // private rawBytes: number[];
    // private findSection(arg0: number, arg1: ManifestDigester$Position): boolean;
    get(arg0: string): ManifestDigester$Entry;
    get(arg0: string, arg1: boolean): ManifestDigester$Entry;
    getMainAttsEntry(): ManifestDigester$Entry;
    getMainAttsEntry(arg0: boolean): ManifestDigester$Entry;
    // private isNameAttr(arg0: number[], arg1: number): boolean;
    manifestDigest(arg0: MessageDigest): number[];
}