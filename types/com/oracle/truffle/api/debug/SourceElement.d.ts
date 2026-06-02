import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SourceElement extends Enum<SourceElement> {
    static EXPRESSION: SourceElement;
    static ROOT: SourceElement;
    static STATEMENT: SourceElement;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SourceElement;
    static values(): (Object | null)[];
    private constructor(tag: Class<Tag>)
    // private tag: Class<Tag>;
    getTag(): Class<Tag>;
    name(): "STATEMENT" | "EXPRESSION" | "ROOT";
}