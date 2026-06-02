import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { MessageDigest } from '../../../java/security/MessageDigest.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ManifestDigester$Section } from '../../../sun/security/util/ManifestDigester$Section.d.ts'
export class ManifestDigester$Entry extends Object {
    constructor()
    // private oldStyle: boolean;
    // private sections: ManifestDigester$Section[];
    // private addSection(arg0: ManifestDigester$Section): ManifestDigester$Entry;
    digest(arg0: MessageDigest): number[];
    digestWorkaround(arg0: MessageDigest): number[];
    isProperlyDelimited(): boolean;
    reproduceRaw(arg0: OutputStream): void;
}