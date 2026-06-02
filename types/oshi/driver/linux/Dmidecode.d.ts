import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../oshi/util/tuples/Pair.d.ts'
export class Dmidecode extends Object {
    static queryBiosNameRev(): Pair<string, string>;
    static querySerialNumber(): string;
    static queryUUID(): string;
    private constructor()
}