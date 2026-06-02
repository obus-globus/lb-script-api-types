import type { JSONHelper$JSONStringBuilder } from '../../../../../com/oracle/truffle/api/utilities/JSONHelper$JSONStringBuilder.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class JSONHelper$JSONArrayBuilder extends JSONHelper$JSONStringBuilder {
    private constructor()
    // private contents: Object[];
    add(value: JSONHelper$JSONStringBuilder): JSONHelper$JSONArrayBuilder;
    add(value: boolean): JSONHelper$JSONArrayBuilder;
    add(value: Number): JSONHelper$JSONArrayBuilder;
    add(value: string): JSONHelper$JSONArrayBuilder;
    appendTo(sb: StringBuilder): void;
}