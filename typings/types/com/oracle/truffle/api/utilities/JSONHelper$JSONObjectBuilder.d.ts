import type { JSONHelper$JSONStringBuilder } from '../../../../../com/oracle/truffle/api/utilities/JSONHelper$JSONStringBuilder.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class JSONHelper$JSONObjectBuilder extends JSONHelper$JSONStringBuilder {
    private constructor()
    // private contents: { [key: string]: Object };
    add(key: string, value: JSONHelper$JSONStringBuilder): JSONHelper$JSONObjectBuilder;
    add(key: string, value: boolean): JSONHelper$JSONObjectBuilder;
    add(key: string, value: Number): JSONHelper$JSONObjectBuilder;
    add(key: string, value: string): JSONHelper$JSONObjectBuilder;
    appendTo(sb: StringBuilder): void;
}